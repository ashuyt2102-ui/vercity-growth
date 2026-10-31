import { readFileSync, existsSync } from "node:fs";

const env = {};
if (existsSync(".env.local")) {
  for (const l of readFileSync(".env.local", "utf8").split(/\n/)) {
    const t = l.trim();
    if (!t || t.startsWith("#")) continue;
    const i = t.indexOf("=");
    if (i > 0) env[t.slice(0, i)] = t.slice(i + 1);
  }
}

function check(name, ok, hint) {
  console.log(`${ok ? "PASS" : "FAIL"} ${name}${ok ? "" : " - " + hint}`);
  return ok;
}

let all = true;
all = check("NEXT_PUBLIC_SITE_URL set", !!env.NEXT_PUBLIC_SITE_URL, "set owner's canonical origin") && all;
try {
  const u = new URL(env.NEXT_PUBLIC_SITE_URL || "");
  all = check("NEXT_PUBLIC_SITE_URL valid URL", u.protocol.startsWith("http"), "must be http(s) URL") && all;
  if (u.hostname === "localhost" || u.hostname === "127.0.0.1") {
    console.log("WARN NEXT_PUBLIC_SITE_URL is localhost (preview only)");
  }
} catch {
  all = false;
  console.log("FAIL NEXT_PUBLIC_SITE_URL valid URL - invalid");
}

const hasResend = !!env.RESEND_API_KEY && !!env.CONTACT_FROM_EMAIL && !!env.CONTACT_TO_EMAIL;
all = check("Resend configured", hasResend, "set RESEND_API_KEY, CONTACT_FROM_EMAIL, CONTACT_TO_EMAIL") && all;

const hasRate = !!env.UPSTASH_REDIS_REST_URL && !!env.UPSTASH_REDIS_REST_TOKEN;
if (!hasRate) console.log("WARN durable rate limit not configured; in-memory fallback is dev-only");

console.log(all ? "\nLaunch-ready configuration: YES (for configured items)" : "\nLaunch-ready configuration: NO");
process.exit(all ? 0 : 1);
