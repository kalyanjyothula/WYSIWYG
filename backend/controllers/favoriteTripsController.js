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

  const { trips } = await favoriteTrips.findOne({ email: email });
  console.log(trips.includes(trip), trips);
  if (trips.length > 0 && trips.includes(trip)) {
    const newTrips = trips.filter((ele) => ele !== trip);
    const out = await handleFavTripOperations(email, newTrips);
    return res
      .status(200)
      .json({ success: true, message: 'Trip removed successfully' });
  } else {
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

module.exports = {
  getFavoriteTripsByEmail,
  favoriteTripsOperations,
  handleFavTripOperations,
};
