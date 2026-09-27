import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import type { NextRequest } from "next/server";

interface RateLimiterOptions {
  /** Namespaces the Upstash keys, e.g. "contact" or "reviews". */
  prefix: string;
  max: number;
  windowMinutes: number;
}

/**
 * IP rate limiter backed by Upstash (shared across serverless instances),
 * with a bounded in-memory fallback when Upstash isn't configured or errors.
 */
export function createRateLimiter({ prefix, max, windowMinutes }: RateLimiterOptions) {
  const windowMs = windowMinutes * 60 * 1000;

  const upstash =
    process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
      ? new Ratelimit({
          redis: Redis.fromEnv(),
          limiter: Ratelimit.slidingWindow(max, `${windowMinutes} m`),
          prefix: `@upstash/ratelimit/locallify-${prefix}`,
        })
      : null;

  const hits = new Map<string, number[]>();
  let lastCleanup = Date.now();

  function isLimitedInMemory(ip: string): boolean {
    const now = Date.now();

    // Evict stale keys once an hour to bound memory in long-running processes
    if (now - lastCleanup > 60 * 60 * 1000) {
      for (const [key, times] of hits.entries()) {
        const active = times.filter((t) => now - t < windowMs);
        if (active.length === 0) hits.delete(key);
        else hits.set(key, active);
      }
      lastCleanup = now;
    }

    const recent = (hits.get(ip) ?? []).filter((t) => now - t < windowMs);
    if (recent.length >= max) return true;
    hits.set(ip, [...recent, now]);
    return false;
  }

  return async function isRateLimited(ip: string): Promise<boolean> {
    if (upstash) {
      try {
        const { success } = await upstash.limit(ip);
        return !success;
      } catch (err) {
        console.error(`[RateLimit:${prefix}] Upstash error, falling back to memory:`, err);
      }
    }
    return isLimitedInMemory(ip);
  };
}

export function getClientIp(req: NextRequest): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    req.headers.get("x-real-ip") ??
    "unknown"
  );
}
