const { DataTypes } = require("sequelize");
const {sequelize} = require("../config/database");

const Novels = sequelize.define("novels",{
    name: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.INTEGER
    },
    category: {
        type: DataTypes.STRING
    },
    numpage: {
        type: DataTypes.INTEGER
    },
    rating: {
        type: DataTypes.FLOAT
    },
    promotion: {
        type: DataTypes.FLOAT
    },
    file_pic: {
        type: DataTypes.STRING
    },
    file_test: {
        type: DataTypes.STRING
    },
    file_real: {
        type: DataTypes.STRING
    },
    release_date: {
        type: DataTypes.DATE
    },
    author: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.TEXT
    },
    cover_price: {
        type: DataTypes.FLOAT
    }
});

module.exports = Novels;