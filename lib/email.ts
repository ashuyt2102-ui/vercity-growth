import { Resend } from "resend";
import { getResendConfig } from "@/lib/env";

export type EnquiryPayload = {
  name: string;
  email: string;
  service: string;
  brief: string;
  businessName?: string;
  phone?: string;
  budget?: string;
  adBudget?: string;
  plan?: string;
};

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function sendEnquiryEmail(payload: EnquiryPayload, idempotencyKey?: string) {
  const cfg = getResendConfig();
  if (!cfg.apiKey || !cfg.from || !cfg.to) {
    return { ok: false as const, reason: "missing_config" as const };
  }

  const resend = new Resend(cfg.apiKey);
  const subject = `New enquiry — ${payload.name} (${payload.service})`;
  const html = `
    <h2>New enquiry</h2>
    <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
    <p><strong>Service:</strong> ${escapeHtml(payload.service)}</p>
    <p><strong>Plan:</strong> ${escapeHtml(payload.plan || "-")}</p>
    <p><strong>Business:</strong> ${escapeHtml(payload.businessName || "-")}</p>
    <p><strong>Phone:</strong> ${escapeHtml(payload.phone || "-")}</p>
    <p><strong>Monthly service budget:</strong> ${escapeHtml(payload.budget || "-")}</p>
    <p><strong>Advertising budget:</strong> ${escapeHtml(payload.adBudget || "-")}</p>
    <p><strong>Brief:</strong><br/>${escapeHtml(payload.brief).replace(/\n/g, "<br/>")}</p>
  `;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);

  try {
    const { data, error } = await resend.emails.send(
      { from: cfg.from, to: cfg.to, subject, html, replyTo: payload.email },
      idempotencyKey ? { idempotencyKey } : undefined
    );
    if (error) return { ok: false as const, reason: error.message };
    return { ok: true as const, id: data?.id };
  } catch (e) {
    const msg = e instanceof Error ? e.message : "Unknown error";
    return { ok: false as const, reason: msg };
  } finally {
    clearTimeout(timeout);
  }
}
