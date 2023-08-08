const mongoose = require('mongoose');

const subSchema = mongoose.Schema({
  arrival: {
    type: String,
    required: true,
  },
  distance: {
    type: String,
    required: true,
  },
  mediumOfTransport: {
    type: String,
    required: true,
  },
  travelTime: {
    type: String,
    required: true,
  },
});

const routesModel = mongoose.Schema({
  route: {
    type: [Object],
    required: true,
  },
});

module.exports = mongoose.model('routes', routesModel);
