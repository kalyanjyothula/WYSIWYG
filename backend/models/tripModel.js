const mongoose = require('mongoose');

const tripSchema = mongoose.Schema({
  tripName: {
    type: String,
    required: [true, 'Please add TripName field !'],
    unique: true,
    trim: true,
  },
  smTitle: {
    type: String,
    required: true,
  },
  mdTitle: {
    type: String,
    required: true,
  },
  smDescription: {
    type: String,
    required: true,
  },
  mdDescription: {
    type: String,
    required: true,
  },
  fullDescription: {
    type: [String],
    default: [],
  },
  tripTags: {
    type: [String],
    default: [],
    required: true,
  },
  likes: {
    type: Number,
    default: 0,
  },
  review: {
    type: Number,
    default: 0,
  },
  images: {
    type: [Object],
    default: [{}],
  },
  cardImage: {
    type: String,
    required: true,
  },
  nearBy: {
    type: [String],
  },
  route: {
    type: [String],
    required: true,
  },
});

module.exports = mongoose.model('Trip', tripSchema);
