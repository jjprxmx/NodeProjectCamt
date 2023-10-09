
const Sequelize = require('sequelize');
const sequelize = require('../config/database'); // Adjust the path as needed

// Define the "Review" model
const Review = sequelize.define('Review', {
  id: {
    type: Sequelize.INTEGER,
  },
  id_user: {
    type: Sequelize.INTEGER,
  },
  id_novel: {
    type: Sequelize.INTEGER,
  },
  detail: {
    type: Sequelize.TEXT,
  },
  numlike: {
    type: Sequelize.INTEGER,
  },
});


module.exports = Review;
