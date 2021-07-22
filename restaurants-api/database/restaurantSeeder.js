const faker = require('faker');
const Restaurant = require('../models/RestaurantModel');

const seedRestaurants = (req, res) => {
  for (let i = 0; i <= 15; i++) {
    let restaurant = new Restaurant({
      logo: 'https://images.unsplash.com/photo-1541086095944-f4b5412d3666?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      name: faker.company.companyName(),
      description: faker.lorem.paragraph(),
      images: [
        'https://images.unsplash.com/photo-1584536286788-78ae81c2c54e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1561221820-5ed0595bcb4c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1602&q=80',
        'https://images.unsplash.com/photo-1563206100-c1495de14c53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
      ]
    });

    restaurant.save((err, restaurant) => {
      err && res.status(500).send(err.message);
    });
  }

  res.status(200).send("restaurants seeded!");
}

module.exports = { seedRestaurants };