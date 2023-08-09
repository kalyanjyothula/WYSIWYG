const mongoose = require('mongoose');

const homePageDataSchema = mongoose.Schema(
  {
    title: {
      type: String,
      unique: true,
      required: true,
    },
    description: {
      type: String,
      unique: true,
      required: true,
    },
    data: {
      type: [String],
      default: [],
      required: true,
    },
    banner: {
      type: [
        {
          title: {
            type: String,
            // unique: true,
            // required: true,
          },
          color: {
            type: String,
            // required: true,
          },
        },
      ],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('homePage', homePageDataSchema);
