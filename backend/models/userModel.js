const mongoose = require('mongoose')
const validator = require("validator");

const userSchema = mongoose.Schema(
  {
    mobile: {
      type: String,
      required: [true, 'Please add Mobile Number field !'],
      unique: true,
      trim: true,
      validate: {
        validator: function(num) {
          return /\d{10}/.test(num)
        },
        message: props => `${props.value} is not a valid phone number!`
      }
    },
    email: {
      type: String,
      required: [true, 'Please add Email field !'],
      unique: true,
      trim: true,
      validate: {
        validator: validator.isEmail,
        // message: `${VALUE} is not a valid email !`
      }
    },
    password: {
      type: String,
      required: [true, 'Please add Password field !'],
      trim: true,
    },
    token: {
      type: String,
    }

  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('User', userSchema);
