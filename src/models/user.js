const Sequelize = require("sequelize");
const sequelize = require("../db/sequelize");

const User = sequelize.define('user',{
    // creating the user model, representing how the user table will look like
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
    // This creates the table if it doesn't exist (and does nothing if it already exists)
})();

module.exports = User; 