const { DataTypes } = require("sequelize");
const {sequelize} = require("../config/database");

const Basket = sequelize.define("basket", 
{     
    id_user: {
      type: DataTypes.INTEGER,
    },
    id_novel: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },

  });
  

module.exports = Basket;