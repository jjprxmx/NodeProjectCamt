const { DataTypes } = require("sequelize");
const {sequelize} = require("../config/database");

const Orders = sequelize.define("orders", 
{     
    id_user: {
      type: DataTypes.NUMBER,
    },
    id_novel: {
      type: DataTypes.NUMBER,
      primaryKey: true
    }
  });
  

module.exports = Orders;