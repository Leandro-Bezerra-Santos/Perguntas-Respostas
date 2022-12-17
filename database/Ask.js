const Sequelize = require('sequelize')
const connection = require('./connection');

const ask = connection.define('Questions', {
    title:{
        type: Sequelize.STRING,
        allowNull: false //Impedi que o campo receba um valor nulo
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});//Definir o nome da tabela 

ask.sync({force: false})
 //Sincronizando o banco de dados como a tabela, ou seja, se no banco de dados essa tabela não existir ele vai criar

module.exports = ask;