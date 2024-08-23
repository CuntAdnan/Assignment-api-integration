const rateLimit = require('express-rate-limit');
const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 500,     
    message: 'Too many requests from this IP, please try again later.',
    standardHeaders: true, 
    legacyHeaders: false, 
  });

module.exports=apiLimiter;  