const Sequelize = require("sequelize");

const connection = new Sequelize('ask', 'root', 'Leandr0@', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection;