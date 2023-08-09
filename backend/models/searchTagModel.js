const mongoose = require('mongoose');

const searchTagSchema = mongoose.Schema(
  {
    search: {
      type: [String],
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Search', searchTagSchema);
