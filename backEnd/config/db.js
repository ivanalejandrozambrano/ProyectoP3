const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('bd-bank', 'postgres', '123', {
  host: 'localhost',
  dialect: 'postgres'
});

module.exports = sequelize;
