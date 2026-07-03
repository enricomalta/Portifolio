export interface RateLimitResult {
  allowed: boolean;
  retryAfter: number;
  remaining: number;
}

const rateLimit = new Map<string, number[]>();

export function getRateLimitKey(ip: string) {
  return `rate-limit:${ip}`;
}

export function checkRateLimit(ip: string, limit = 5, windowMs = 3600000): RateLimitResult {
  const key = getRateLimitKey(ip);
  const now = Date.now();
  const windowStart = now - windowMs;

  if (!rateLimit.has(key)) {
    rateLimit.set(key, []);
  }

  const requests = rateLimit.get(key) ?? [];
  const validRequests = requests.filter((timestamp) => timestamp > windowStart);

  if (validRequests.length >= limit) {
    const oldestRequest = validRequests[0];
    const retryAfter = Math.ceil((oldestRequest + windowMs - now) / 1000);
    return {
      allowed: false,
      retryAfter,
      remaining: 0,
    };
  }

  validRequests.push(now);
  rateLimit.set(key, validRequests);

  return {
    allowed: true,
    remaining: limit - validRequests.length,
    retryAfter: 0,
  };
}

setInterval(() => {
  const now = Date.now();
  const windowMs = 3600000;

  for (const [key, requests] of rateLimit.entries()) {
    const windowStart = now - windowMs;
    const validRequests = requests.filter((timestamp) => timestamp > windowStart);

    if (validRequests.length === 0) {
      rateLimit.delete(key);
    } else {
      rateLimit.set(key, validRequests);
    }
  }
}, 3600000);
