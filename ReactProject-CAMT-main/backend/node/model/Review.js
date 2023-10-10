
const {Sequelize} = require('sequelize');
const {sequelize }= require('../config/database'); // Adjust the path as needed

// Define the "Review" model "reviews" is name of table in database
const Review = sequelize.define("reviews", 
{     
  id_user: {
    type: Sequelize.INTEGER,
  },
  id_novel: {
    type: Sequelize.INTEGER,
  },
  details: {
    type: Sequelize.TEXT,
  },
  num_like: {
    type: Sequelize.INTEGER,
  },
});


module.exports = Review;