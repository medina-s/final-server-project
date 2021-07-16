const Sequelize = require('sequelize');

const sequelize = new Sequelize("postgres://postgres:admin@lala04@localhost:5432/final");

module.exports = sequelize;