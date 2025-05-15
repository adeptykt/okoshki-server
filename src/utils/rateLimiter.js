// utils/rateLimiter.js
const NodeCache = require('node-cache');
const limiterCache = new NodeCache({ stdTTL: 3600, checkperiod: 60 });

module.exports = {
  check: (userId) => {
    const key = `rate_limit_${userId}`;
    const count = limiterCache.get(key) || 0;
    
    if (count >= 15) return false;
    
    limiterCache.set(key, count + 1);
    return true;
  }
};
