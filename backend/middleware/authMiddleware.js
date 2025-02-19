const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

const protect = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];

      const decode = jwt.verify(token, process.env.JWT_SECRET);
      console.log(decode, 'decoded token');
      req.user = await User.findById(decode.id).select('-password');
      next();
    } catch (error) {
      console.log(error);
      res.status(401).json({ status: 'unauthorized' });
      throw new Error('Not authorized');
    }

    if (!token) {
      res.status(401).json({ status: 'unauthorized' });
      throw new Error('Not authorized, no token');
    }
  } else res.status(401).json({ status: 'unauthorized' });
});

module.exports = { protect };
