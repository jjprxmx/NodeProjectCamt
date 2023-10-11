
const {Sequelize} = require('sequelize');
const {sequelize }= require('../config/database');

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