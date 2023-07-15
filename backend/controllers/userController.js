const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const registerUser = asyncHandler(async (req, res) => {
  const { mobile, email, password } = req.body;
  // console.log("running register", req)
  if (!mobile || !email || !password) {
    res.status(404);
    throw new Error('Please add all fields !');
  }
  const userExist = await User.findOne({ email });

  if (userExist) {
    return res
      .status(400)
      .json({ success: false, message: 'User already exists' });
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    mobile,
    email,
    password: hashedPassword,
  });
  console.log('db action !');
  if (user) {
    const token = generateToken({ id: user._id, password: user.password });
    await User.updateOne({ email: user.email }, { $set: { token: token } });
    res.cookie('beyond-token', token, { httpOnly: true });
    return res.status(201).json({
      success: true,
      _id: user.id,
      mobile: user.mobile,
      email: user.email,
      token: token,
    });
  } else {
    res.status(400);
    throw new Error('Invalided user data');
  }

  // res.json({ message: "register user !" })
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  // console.log(email, password, req.body, 'User');
  const passwordCheck = await bcrypt.compare(password, user.password);
  // console.log(user, passwordCheck, "login Backend");
  if (user && passwordCheck) {
    const token = generateToken({ id: user._id, password: user.password });
    await User.updateOne({ email: user.email }, { $set: { token: token } });
    res.cookie('beyond-token', token, { httpOnly: true });
    return res.status(200).json({
      success: true,
      _id: user.id,
      mobile: user.mobile,
      email: user.email,
      token: token,
    });
  } else {
    res.status(400);
    throw new Error('Invalid credentials !');
  }
  // res.json({ message: "login User !" })
});

const logOutUser = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    const output = await User.updateOne(
      { email: email },
      { $unset: { token: 1 } }
    );
    res.clearCookie('beyond-token');
    return res.status(200).json({
      success: true,
      message: 'logout successfully',
    });
  } else {
    res.status(400);
    throw new Error('Invalid credentials !');
  }
});

const getMe = asyncHandler(async (req, res) => {
  const token = req.cookies['beyond-token'];
  if (token) {
    const user = await getUserByToken(token);
    if (user) {
      return res.status(200).json({
        success: true,
        mobile: user.mobile,
        email: user.email,
        token: user.token,
        id: user._id,
      });
    }
  }
  return res.status(404).json({ success: false, message: 'User not found' });
});

const generateToken = ({ id, password }) => {
  return jwt.sign({ id: id, password: password }, `${process.env.JWT_SECRET}`, {
    expiresIn: '30d',
  });
};

const getUserByToken = asyncHandler(async (token) => {
  const user = await User.findOne({ token: token });
  if (user) {
    return user;
  }
  return null;
});

module.exports = {
  registerUser,
  loginUser,
  getMe,
  logOutUser,
};
