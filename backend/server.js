const path = require('path');
const express = require('express');
const dotenv = require('dotenv').config();
const color = require('colors');
const cookieParser = require('cookie-parser');

const connectDB = require('./config/connection');
const errorHandler = require('./middleware/errorMiddleware');

connectDB();
const PORT = process.env.PORT || 5001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

/* --------------  Apis  ------------------  */

app.use('/api/goals', require('./routes/goalsRouter'));
app.use('/api/user', require('./routes/userRouter'));
// app.use('/api/fav-trips', require('./routes/favTripsRouter'));
// app.use('/api/trip', require('./routes/tripRouter'));
// app.use('/api/route', require('./routes/tripRoutes'));
console.log(__dirname, "dir")
// Serve frontend
const __dirname1 = path.resolve()
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname1, '../frontend/build')));

  app.get('*', (req, res) =>
    res.sendFile(
      path.resolve(__dirname1, '../', 'frontend', 'build', 'index.html')
    )
  );
} else {
  app.get('/', (req, res) => res.send('Please set to production'));
}

/* --------------   Error Handle ------------------- */
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
