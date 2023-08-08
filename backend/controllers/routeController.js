const asyncHandler = require('express-async-handler');
const Routes = require('../models/routesModel');

const createRoute = asyncHandler(async (req, res) => {
  const { route } = req.body;
  if (route && route.length > 0) {
    const result = await Routes.create({ route: [] });
    console.log(result, 'result');
    const id = result._id;
    const response = await Routes.findByIdAndUpdate(
      { _id: id },
      { $push: { route: { $each: route } } },
      { new: true }
    );
    console.log(response, 'response');

    return res.status(200).json({ success: true });
  }
  return res.status(400).json({ success: false });
});

module.exports = { createRoute };
