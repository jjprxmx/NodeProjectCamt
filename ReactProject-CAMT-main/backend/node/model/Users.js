const { DataTypes } = require("sequelize");
const {sequelize} = require("../config/database");

const Users = sequelize.define("users", 
{
  email: {
    type: DataTypes.STRING,
  },
  username: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
  name: {
    type: DataTypes.STRING,
  },
  gender: {
    type: DataTypes.STRING,
  },
  level: {
    type: DataTypes.NUMBER,
  },
  pic: {
    type: DataTypes.STRING,
  },
});

module.exports = Users;