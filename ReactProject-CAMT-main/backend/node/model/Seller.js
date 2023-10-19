const { DataTypes } = require("sequelize");
const {sequelize} = require("../config/database");

const Seller = sequelize.define("sellersecretinfos", 
{
    seller_id: {
    type: DataTypes.NUMBER,
    primaryKey: true
  },
  bank_account_number: {
    type: DataTypes.STRING,
  },
  Identity: {
    type: DataTypes.STRING,
    allowNull: true
  },
  namebank: {
    type: DataTypes.STRING,
  },
  id: {
    type: DataTypes.INTEGER,
  },
  id_card_number: {
    type: DataTypes.STRING,
  }
});

module.exports = Seller;