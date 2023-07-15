const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Database connection established !`.bgGreen.white.bold);
  } catch (error) {
    console.log(`${error}`.bgRed.bold);
    process.exit(1);
  }
};

module.exports = connectDB;
