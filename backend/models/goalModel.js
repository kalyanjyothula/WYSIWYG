const mongoose = require("mongoose");

const goalSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
    opinions: {
      type: String,
      required: [true, 'Please add the Text !!']
    }
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Goal', goalSchema);
