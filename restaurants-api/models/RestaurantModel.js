const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RestaurantSchema = new Schema({
  logo: String,
  name: String,
  description: String,
  images: []
});

module.exports = Restaurant = mongoose.model('Restaurant', RestaurantSchema);