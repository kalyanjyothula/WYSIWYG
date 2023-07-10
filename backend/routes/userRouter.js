const express = require('express')
const router = express.Router()

const { registerUser, loginUser, getMe } = require('../controllers/userController')
const { protect } = require('../middleware/authMiddleware')

router.route('/register').post(registerUser)
router.route('/login').post(loginUser)
router.route('/getMe').get(getMe)

module.exports = router;