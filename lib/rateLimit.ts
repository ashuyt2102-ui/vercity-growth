import { getRateLimitConfig } from "@/lib/env";

type Result = { allowed: boolean; remaining: number };

const memory = new Map<string, { count: number; reset: number }>();

export async function checkRateLimit(key: string, limit = 5, windowMs = 60_000): Promise<Result> {
  const cfg = getRateLimitConfig();
  if (cfg.url && cfg.token) {
    // Upstash Redis REST
    const now = Math.floor(Date.now() / 1000);
    const windowSec = Math.ceil(windowMs / 1000);
    const bucket = Math.floor(now / windowSec);
    const redisKey = `rl:${key}:${bucket}`;
    const res = await fetch(`${cfg.url}/incr/${encodeURIComponent(redisKey)}`, {
      headers: { Authorization: `Bearer ${cfg.token}` },
    });
    const data = (await res.json()) as { result?: number };
    const count = data.result ?? 1;
    if (count === 1) {
      await fetch(`${cfg.url}/expire/${encodeURIComponent(redisKey)}/${windowSec}`, {
        headers: { Authorization: `Bearer ${cfg.token}` },
      });
    }
    return { allowed: count <= limit, remaining: Math.max(0, limit - count) };
  }

  // Development-only in-memory fallback
  const now = Date.now();
  const entry = memory.get(key);
  if (!entry || entry.reset < now) {
    memory.set(key, { count: 1, reset: now + windowMs });
    return { allowed: true, remaining: limit - 1 };
  }
  if (entry.count >= limit) return { allowed: false, remaining: 0 };
  entry.count += 1;
  return { allowed: true, remaining: limit - entry.count };
}
