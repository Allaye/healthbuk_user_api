const path = require('path');
const Sequelize = require('sequelize');
require('dotenv').config({path: path.resolve(__dirname,'../../.env')});


const sequelize = new Sequelize(process.env.database, process.env.user, process.env.password,{
    dialect: process.env.dbtype,
    host: process.env.host
});


module.exports = sequelize;