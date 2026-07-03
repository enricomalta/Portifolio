const rateLimit = new Map();

export function getRateLimitKey(ip) {
  return `rate-limit:${ip}`;
}

export function checkRateLimit(ip, limit = 5, windowMs = 3600000) {
  const key = getRateLimitKey(ip);
  const now = Date.now();
  const windowStart = now - windowMs;

  if (!rateLimit.has(key)) {
    rateLimit.set(key, []);
  }

  const requests = rateLimit.get(key);
  
  // Remover requisições fora da janela de tempo
  const validRequests = requests.filter(timestamp => timestamp > windowStart);
  
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

// Limpar cache antigo a cada hora
setInterval(() => {
  const now = Date.now();
  const windowMs = 3600000;

  for (const [key, requests] of rateLimit.entries()) {
    const windowStart = now - windowMs;
    const validRequests = requests.filter(timestamp => timestamp > windowStart);
    
    if (validRequests.length === 0) {
      rateLimit.delete(key);
    } else {
      rateLimit.set(key, validRequests);
    }
  }
}, 3600000);
