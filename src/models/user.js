const Sequelize = require("sequelize");
const sequelize = require("../db/sequelize");

const User = sequelize.define('user',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    age: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validator: {
            isEmail: true,
        }
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,

    }

});

(async () => {
    await sequelize.sync();
    // Code here
})();

module.exports = User; 