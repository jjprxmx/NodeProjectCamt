const { DataTypes } = require("sequelize");
const {sequelize} = require("../config/database");

const Seller = sequelize.define("users", 
{
  seller_id: {
    type: DataTypes.INTEGER,
  },
  bank_account_number: {
    type: DataTypes.INTEGER ,
  },
  Identity: {
    type: DataTypes.STRING,
  },
  namebank: {
    type: DataTypes.STRING,
  },
  id: {
    type: DataTypes.INTEGER,
  },    
  id_card_number: {
    type: DataTypes.NUMBER,
  },
});

module.exports = Seller;