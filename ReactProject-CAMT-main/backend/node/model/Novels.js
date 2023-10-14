const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const Novels = sequelize.define("novels", {
  name: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.INTEGER,
  },
  category: {
    type: DataTypes.STRING,
  },
  numpage: {
    type: DataTypes.INTEGER,
  },
  rating: {
    type: DataTypes.DOUBLE,
  },
  promotion: {
    type: DataTypes.INTEGER,
  },
  file_pic: {
    type: DataTypes.STRING,
  },
  file_test: {
    type: DataTypes.STRING,
  },
  file_real: {
    type: DataTypes.STRING,
  },
  release_date: {
    type: DataTypes.STRING,
  },
  author: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.TEXT,
  },
  cover_price: {
    type: DataTypes.INTEGER,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false
  }
});

module.exports = Novels;
