const asyncHandler = require('express-async-handler');
const favoriteTrips = require('../models/favoriteTripsModel');

const getFavoriteTripsByEmail = asyncHandler(async (req, res) => {
  const email = req.body.email;
  const favTrips = await favoriteTrips.findOne({ email: email });
  if (favTrips) {
    return res.status(200).json({
      success: true,
      favTrips: favTrips,
    });
  }
  return res
    .status(204)
    .json({ success: false, message: "Couldn't find any favorites" });
});

const favoriteTripsOperations = asyncHandler(async (req, res) => {
  const { trip, email } = req.body;
  console.log(email, trip);

  const output = await favoriteTrips.findOne({ email: email });

  if (!output) {
    const result = await favoriteTrips.create({ email: email, trips: [trip] });
    return res
      .status(200)
      .json({ success: true, message: 'trips created successfully' });
  } else if (output.trips.length > 0 && output.trips.includes(trip)) {
    const { trips } = output;
    const newTrips = trips.filter((ele) => ele !== trip);
    const out = await handleFavTripOperations(email, newTrips);
    return res
      .status(200)
      .json({ success: true, message: 'Trip removed successfully' });
  } else {
    const { trips } = output;
    trips.push(trip);
    const out = await handleFavTripOperations(email, trips);
    return res
      .status(200)
      .json({ success: true, message: 'Trip add successfully' });
  }
  return res.status(504).json({ success: false });
});

const handleFavTripOperations = asyncHandler(async (email, trips) => {
  const out = favoriteTrips.updateOne(
    { email: email },
    { $set: { trips: [...trips] } }
  );
  return out;
});

// remove trip
const removeFavTrip = asyncHandler(async (req, res) => {
  const { id, email } = req.body;
  const trip = await favoriteTrips.findOne({ email: email });
  console.log(trip, 'out');
  if (trip) {
    const out = trip.trips.filter((ele) => ele !== id);
    console.log(out, id, 'res');
    await favoriteTrips.updateOne(
      { email: email },
      { $set: { trips: [...out] } }
    );
    return res
      .status(200)
      .json({ success: true, message: 'Trip removed successfully' });
  }
  return res
    .status(404)
    .json({ success: false, message: 'No such trip exist' });
});

// add trip
const addFavTrip = asyncHandler(async (req, res) => {
  const { id, email } = req.body;
  const trip = await favoriteTrips.find({ email: email });
  if (!trip) {
    const result = await favoriteTrips.create({ email: email, trips: [trip] });
    return res
      .status(200)
      .json({ success: true, message: 'trips created successfully' });
  }
  trip.push(id);
  const out = favoriteTrips.updateOne(
    { email: email },
    { $set: { trips: [...trips] } }
  );
  return res
    .status(404)
    .json({ success: false, message: 'No such trip exist' });
});

module.exports = {
  getFavoriteTripsByEmail,
  favoriteTripsOperations,
  handleFavTripOperations,
  removeFavTrip,
  addFavTrip,
};
