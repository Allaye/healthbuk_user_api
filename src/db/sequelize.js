const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize('healthbuk', 'oga', 'ogaogaogaoga', {
    dialect: 'mysql',
    host: 'localhost'
});


module.exports = sequelize;