const { DataTypes } = require("sequelize");
const {sequelize} = require("../config/database");

const Orders = sequelize.define("orders", 
{     
    id_user: {
      type: DataTypes.INTEGER,
    },
    id_novel: {
      type: DataTypes.INTEGER,
    }
  });
  

module.exports = Orders;