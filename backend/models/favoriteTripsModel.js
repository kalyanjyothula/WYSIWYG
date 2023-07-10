const mongoose = require('mongoose');

const favoriteTripsSchema = mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    trips: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('favoriteTrips', favoriteTripsSchema);
