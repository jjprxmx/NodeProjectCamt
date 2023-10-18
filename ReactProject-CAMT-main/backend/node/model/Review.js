
const {Sequelize} = require('sequelize');
const {sequelize }= require('../config/database');

const Reviews = sequelize.define("reviews", 
{     
  id_user: {
    type: Sequelize.INTEGER,
  },
  id_novel: {
    type: Sequelize.INTEGER,
  },
  details: {
    type: Sequelize.STRING,
  },
  num_like: {
    type: Sequelize.INTEGER,
  },
  createdAt: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  updatedAt: {
    type: Sequelize.DATE,
    allowNull: false
  }
  
});


module.exports = Reviews;