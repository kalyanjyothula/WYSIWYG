const express = require('express');
const router = express.Router();

const {
  getFavoriteTripsByEmail,
  favoriteTripsOperations,
} = require('../controllers/favoriteTripsController');
const { protect } = require('../middleware/authMiddleware');

router.route('/').post(protect, getFavoriteTripsByEmail);
router.route('/add-fav').post(protect, favoriteTripsOperations);

module.exports = router;
