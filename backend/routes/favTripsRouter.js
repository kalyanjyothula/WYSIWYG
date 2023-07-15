const express = require('express');
const router = express.Router();

const {
  getFavoriteTripsByEmail,
  favoriteTripsOperations,
  addFavTrip,
  removeFavTrip,
} = require('../controllers/favoriteTripsController');
const { protect } = require('../middleware/authMiddleware');

router.route('/').post(protect, getFavoriteTripsByEmail);
router.route('/add-fav').post(protect, favoriteTripsOperations);
router.route('/add-favTrip').put(protect, addFavTrip);
router.route('/remove-favTrip').delete(protect, removeFavTrip);

module.exports = router;
