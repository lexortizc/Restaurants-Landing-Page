const express = require('express');
const mongoose = require('mongoose');
const Restaurants = require('./routes/restaurantRouter');
const Comments = require('./routes/commentRouter');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/restaurants', Restaurants);
app.use('/api/comments', Comments);

mongoose.connect(
  "mongodb://localhost/restaurants",
  { useNewUrlParser: true },
  (err, res) => {
    err && console.log("DB connection failed");
    app.listen(4000, () => {
      console.log("Server listening at http://localhost:4000");
    });
  }
);

