const Sequelize = require('sequelize');
const connection = require('./connection')

const response = connection.define('reponses', {
    body: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    askID: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

response.sync({ force: false })
module.exports = response;