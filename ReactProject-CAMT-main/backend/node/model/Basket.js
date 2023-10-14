const { DataTypes } = require("sequelize");
const {sequelize} = require("../config/database");

const Basket = sequelize.define("basket", 
{     
    id_user: {
      type: DataTypes.INTEGER,
    },
    id_novel: {
      type: DataTypes.INTEGER,
    },
    createAt:{
      type: DataTypes.DATE,
      allowNull: false
    },
    updateAt:{
      type: DataTypes.DATE,
      allowNull: false
    },
  });
  

module.exports = Basket;