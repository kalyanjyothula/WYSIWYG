const express = require('express');
const router = express.Router();

const {
  registerUser,
  loginUser,
  getMe,
  logOutUser,
} = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/getMe').get(getMe);
router.route('/logout').post(logOutUser);

module.exports = router;
