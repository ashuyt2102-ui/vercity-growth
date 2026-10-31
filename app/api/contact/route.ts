import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations";
import { checkRateLimit } from "@/lib/rateLimit";
import { sendEnquiryEmail } from "@/lib/email";
import { getService } from "@/data/services";
import { getSupabaseAdmin, enquiriesTable } from "@/lib/supabase";
import { getPlan } from "@/data/pricing";

import crypto from "node:crypto";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_BYTES = 16 * 1024;

function allowedOrigin(req: NextRequest) {
  const origin = req.headers.get("origin");
  if (!origin) return true;
  const site = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  try {
    const o = new URL(origin);
    const s = new URL(site);
    if (o.host === s.host) return true;
    if (o.hostname === "localhost" || o.hostname === "127.0.0.1") return true;
    return false;
  } catch {
    return false;
  }
}

export async function POST(req: NextRequest) {
  if (!allowedOrigin(req)) {
    return NextResponse.json({ error: "Forbidden." }, { status: 403 });
  }

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const rl = await checkRateLimit(ip);
  if (!rl.allowed) {
    return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
  }

  const length = Number(req.headers.get("content-length") || 0);
  if (length > MAX_BYTES) {
    return NextResponse.json({ error: "Request too large." }, { status: 413 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path.join(".") || "form";
      if (!fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return NextResponse.json({ error: "Validation failed.", fieldErrors }, { status: 400 });
  }

  const data = parsed.data;

  // honeypot
  if (data.honeypot && data.honeypot.trim() !== "") {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  // validate service
  const service = getService(data.service);
  if (!service) {
    return NextResponse.json({ error: "Validation failed.", fieldErrors: { service: "Unknown service." } }, { status: 400 });
  }

  // validate plan if provided
  if (data.plan) {
    const plan = getPlan(data.plan);
    if (!plan) {
      return NextResponse.json({ error: "Validation failed.", fieldErrors: { plan: "Unknown plan." } }, { status: 400 });
    }
  }

  // normalize reply-to safety: email already validated by zod

  const idempotencyKey = crypto
    .createHash("sha256")
    .update(JSON.stringify({ name: data.name, email: data.email, service: data.service, brief: data.brief, plan: data.plan }))
    .digest("hex");

const supabase = getSupabaseAdmin();
  if (supabase) {
    const { error: dbError } = await supabase.from(enquiriesTable).insert({
      name: data.name,
      email: data.email,
      service: service.id,
      plan: data.plan || null,
      business_name: data.businessName || null,
      phone: data.phone || null,
      budget: data.budget || null,
      ad_budget: data.adBudget || null,
      brief: data.brief,
    });
    if (dbError) {
      return NextResponse.json({ error: "We could not save your enquiry. Please try again." }, { status: 502 });
    }
  }

  const result = await sendEnquiryEmail(
    {
      name: data.name,
      email: data.email,
      service: service.title,
      brief: data.brief,
      businessName: data.businessName || undefined,
      phone: data.phone || undefined,
      budget: data.budget || undefined,
      adBudget: data.adBudget || undefined,
      plan: data.plan || undefined,
    },
    idempotencyKey
  );

  if (!result.ok) {
    if (result.reason === "missing_config") {
      return NextResponse.json({ error: "Enquiry service is not configured yet. Please email us directly once contact details are published." }, { status: 503 });
    }
    return NextResponse.json({ error: "We could not send your enquiry. Please try again." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
