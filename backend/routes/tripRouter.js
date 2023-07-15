const express = require('express');
const router = express.Router();

const {
  tripById,
  createTrip,
  userTrips,
  homePageTrips,
  createHomePageTrip,
} = require('../controllers/tripController');
const { protect } = require('../middleware/authMiddleware');

router.route('/trip').post(protect, tripById);
router.route('/create-trip').post(protect, createTrip);
router.route('/user-fav-trips').post(protect, userTrips);
router.route('/homepage').get(homePageTrips);
router.route('/create-homepage-trip').post(protect, createHomePageTrip);

module.exports = router;
