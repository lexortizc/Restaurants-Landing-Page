const RestaurantSeeder = require('../database/restaurantSeeder');
const RestaurantController = require('../controllers/restaurantController');
const express = require('express');

const router = express.Router();

router.post("/seed", RestaurantSeeder.seedRestaurants);
router.get('/all', RestaurantController.findAll);
router.get('/:id', RestaurantController.findById);

module.exports = router;