const asyncHandler = require('express-async-handler');
const searchTags = require('../models/searchTagModel');
const Trip = require('../models/tripModel');

const generateSearchTags = asyncHandler(async (req, res) => {
  const data = await Trip.find().select('tripTags');
  const searchTags = [...new Set(data.flatMap(({ tripTags }) => tripTags))];
  const { acknowledged } = await SearchTag.deleteMany({});
  if (acknowledged) {
    const result = await SearchTag.create({ search: searchTags });
    if (result)
      return res
        .status(200)
        .json({ success: true, message: 'search Tags re-generated' });
  }
  return res
    .status(400)
    .json({ success: false, message: 'failed to generate search tags' });
});

const searchSuggestions = asyncHandler(async (req, res) => {
  const { text } = req.body;
  // console.log(text, 'input');
  if (text) {
    const pattern = new RegExp(text, 'i');
    const data = await searchTags.find();
    const { search } = data[0];
    const result = [];
    search.forEach((ele) => {
      if (pattern.test(ele) && result.length < 10) result.push(ele);
    });
    // console.log(result);
    if (result) return res.status(200).json({ success: true, search: result });
  }

  return res.status(400).json({ success: false, search: [] });
});

const addSearchTag = asyncHandler(async (req, res) => {
  const { id, tags } = req.body;
  // 64b3ad81d5ca3850b220731b
  if (id && tags) {
    const result = await searchTags.updateOne({
      _id: id,
      $set: { $push: { search: { $each: tags } } },
    });
    if (result)
      return res
        .status(200)
        .json({ success: true, msg: 'search tags updated' });
  }
  return res.status(400).json({ success: false, msg: 'search tags updated' });
});

module.exports = { generateSearchTags, searchSuggestions, addSearchTag };
