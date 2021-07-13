const { DataTypes } = require("sequelize");
const db = require("../db");

const Review = db.define("review", {
    movie: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date: {
        type: DataTypes.STRING,
        allowNull: false
    },
    feedback: {
        type: DataTypes.STRING,
        allowNull: false
    },
    owner: {
        type: DataTypes.INTEGER
    }
});

module.exports = Journal;