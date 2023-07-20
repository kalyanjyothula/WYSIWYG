const express = require('express');
const {
  generateSearchTags,
  searchSuggestions,
  addSearchTag,
} = require('../controllers/searchTagController');
const router = express.Router();

const {
  tripById,
  createTrip,
  userTrips,
  homePageTrips,
  createHomePageTrip,
  fetchSearchResult,
  updateFullDescription,
  updateImages,
  updateTripTags,
  updateTripFields,
} = require('../controllers/tripController');
const { protect } = require('../middleware/authMiddleware');

router.route('/trip').post(protect, tripById);
router.route('/search-result').post(fetchSearchResult);
router.route('/create-trip').post(protect, createTrip);
router.route('/user-fav-trips').post(protect, userTrips);
router.route('/homepage').get(homePageTrips);
router.route('/generate-search-tags').get(generateSearchTags);
router.route('/search-suggestion').post(searchSuggestions);
router.route('/create-homepage-trip').post(protect, createHomePageTrip);
router.route('/search-update-tags').post(protect, addSearchTag);
router.route('/update-fullDescription').post(protect, updateFullDescription);
router.route('/update-images').post(protect, updateImages);
router.route('/update-tripTags').post(protect, updateTripTags);
router.route('/update-tripFields').post(protect, updateTripFields);

module.exports = router;
