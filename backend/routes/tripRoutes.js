const express = require('express');
const { createRoute } = require('../controllers/routeController');
const {
  generateSearchTags,
  searchSuggestions,
  addSearchTag,
} = require('../controllers/searchTagController');
const router = express.Router();

const { protect } = require('../middleware/authMiddleware');

router.route('/create').post(protect, createRoute);

module.exports = router;
