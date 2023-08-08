const asyncHandler = require('express-async-handler');
const Trip = require('../models/tripModel');
const favoriteTrips = require('../models/favoriteTripsModel');
const Route = require('../models/routesModel');
const homePages = require('../models/homeDataModel');

const tripById = asyncHandler(async (req, res) => {
  const { id } = req.body;
  const trip = await Trip.findById(id);
  if (trip) {
    const { tripTags: tags, nearBy: nb, route } = trip;
    let [similarTrips, nearBy, routes] = await Promise.all([
      Trip.find({ tripTags: { $elemMatch: { $in: tags } } })
        .sort({ _id: -1 })
        .limit(10),
      Trip.find({ _id: { $in: nb } }).limit(10),
      Route.find({ _id: { $in: route } }),
    ]);

    // Handle cases where the number of results is less than 10
    if (similarTrips.length < 10) {
      const remainingTrips = await Trip.find().limit(10 - similarTrips.length);
      similarTrips = [...similarTrips, ...remainingTrips];
    }
    // if (nearBy.length < 10)
    //   nearBy = await Trip.find().sort({ _id: -1 }).limit(10);
    return res.status(200).json({
      success: true,
      data: {
        trip: trip,
        similarTrips: similarTrips,
        nearBy: nearBy,
        routes: routes,
      },
    });
  }
  return res.status(404).json({ success: false, message: 'trip not found !' });
});

const userTrips = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const data = await favoriteTrips.findOne({ email: email });
  // console.log(data);
  if (data.trips) {
    const { trips } = data;
    const allTrips = await Trip.find({ _id: { $in: trips } });
    if (allTrips) {
      const allTags = [...new Set(allTrips.flatMap((item) => item.tripTags))];
      // console.log(allTags, 'all tags');
      const recommendedTags = allTags.slice(-10);
      const similarTags = allTags.slice(0, 10);
      const tripData = await Promise.all([
        similarTrips(similarTags),
        similarTrips(recommendedTags),
      ]);
      // console.log(tripData);
      return res.status(200).json({
        success: true,
        favTripsList: trips,
        trips: allTrips,
        similarTrips: tripData[0].slice(0, 10),
        recommendedTrips: tripData[1].slice(0, 10),
      });
    }
  }
  return res
    .status(400)
    .json({ success: false, message: 'No Favorite Trips exist !' });
});

const createTrip = asyncHandler(async (req, res) => {
  const {
    tripName,
    smDescription,
    mdDescription,
    fullDescription,
    tripTags,
    likes,
    review,
    images,
    cardImage,
    smTitle,
    mdTitle,
  } = req.body;
  const result = await Trip.create({
    tripName: tripName,
    smDescription: smDescription,
    mdDescription: mdDescription,
    fullDescription: fullDescription,
    tripTags: tripTags,
    likes: likes,
    review: review,
    images: images,
    cardImage: cardImage,
    smTitle: smTitle,
    mdTitle: mdTitle,
  });
  if (result) {
    return res
      .status(200)
      .json({ success: true, msg: 'Trip created !', data: result });
  }
  return res
    .status(400)
    .json({ success: false, msg: 'Trip Creation Failed !', data: result });
});

const homePageTrips = asyncHandler(async (req, res) => {
  const homeData = await homePages.find();
  if (homeData) {
    const tripsData = await Promise.all(
      homeData.map(async ({ _id, data, title, description, banner }) => {
        if (data?.length > 0) {
          const tmp = await Promise.all(data.map((id) => Trip.findById(id)));
          if (tmp)
            return {
              _id: _id,
              title: title,
              description: description,
              banner: banner,
              data: [...tmp],
            };
        }
        return {
          _id: _id,
          title: title,
          description: description,
          banner: banner,
          data: [],
        };
      })
    );
    return res.status(200).json({
      success: true,
      data: tripsData,
    });
  }
  return res
    .status(404)
    .json({ success: false, msg: 'Home page data Not found!' });
});

const createHomePageTrip = asyncHandler(async (req, res) => {
  const { title, description, data, banner } = req.body;
  if (title && description && data) {
    const result = await homePages.create({
      title: title,
      description: description,
      data: data,
      banner: banner,
    });
    if (result) return res.status(200).json({ success: true, data: result });
  }
  return res.status(404).json({ success: false, msg: 'trip creation failed' });
});

const similarTrips = asyncHandler(async (tags) => {
  const output = await Trip.find({ tripTags: { $in: tags } });
  return output;
});

const fetchSearchResult = asyncHandler(async (req, res) => {
  const { key } = req.body;
  console.log(key);
  if (key) {
    const pattern = new RegExp(key, 'i');
    const result = await Trip.find({
      $or: [
        { tripName: pattern },
        { smTitle: pattern },
        { mdTitle: pattern },
        { smDescription: pattern },
        { mdDescription: pattern },
        { tripTags: { $elemMatch: { $regex: pattern } } },
        { fullDescription: { $elemMatch: { $regex: pattern } } },
      ],
    });
    if (result.length > 0) {
      const arr = [];
      cmp = key.toLowerCase();
      result.forEach((item) => {
        low = item.tripName.toLowerCase();
        if (low.includes(key)) arr.unshift(item);
        else arr.push(item);
      });
      return res.status(200).json({ success: true, data: arr });
    } else return res.status(200).json({ success: true, data: [] });
  }
  return res.status(400).json({ success: false });
});

const updateFullDescription = asyncHandler(async (req, res) => {
  const { fullDescription, id } = req.body;
  if (id && fullDescription.length > 0) {
    const result = await Trip.updateOne(
      { _id: id },
      { $set: { fullDescription: fullDescription } }
    );
    return res.status(200).json({ success: true, data: result });
  }
  return res.status(400).json({ success: false });
});

const updateImages = asyncHandler(async (req, res) => {
  const { images, id } = req.body;
  if (id && images.length > 0) {
    const result = await Trip.updateOne(
      { _id: id },
      { $set: { images: images } }
    );
    return res.status(200).json({ success: true, data: result });
  }
  return res.status(400).json({ success: false });
});

const updateTripTags = asyncHandler(async (req, res) => {
  const { tripTags, id } = req.body;
  if (id && tripTags.length > 0) {
    const result = await Trip.updateOne({ _id: id }, { $push: { tripTags } });
    return res.status(200).json({ success: true, data: result });
  }
  return res.status(400).json({ success: false });
});

const updateTripFields = asyncHandler(async (req, res) => {
  const { fields, id } = req.body;
  if (id && Object.keys(fields).length > 0) {
    const result = await Trip.updateOne({ _id: id }, { $set: fields });
    return res.status(200).json({ success: true, data: result });
  }
  return res.status(400).json({ success: false });
});

module.exports = {
  tripById,
  userTrips,
  createTrip,
  homePageTrips,
  createHomePageTrip,
  fetchSearchResult,
  updateTripTags,
  updateFullDescription,
  updateImages,
  updateTripFields,
};
