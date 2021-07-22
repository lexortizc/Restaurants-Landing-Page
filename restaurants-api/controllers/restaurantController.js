const Restaurant = require('../models/RestaurantModel');

const findAll = (req, res) => {
  Restaurant.find({}, 'logo name description', (err, restaurants) => {
    err && res.send(500).send(err.message);
    res.status(200).json(restaurants);
  })
}

const findById = (req, res) => {
  Restaurant.findById(req.params.id, (err, restaurant) => {
    err && res.send(500).send(err.message);

    res.status(200).json(restaurant);
  })
}

module.exports = { findAll, findById }