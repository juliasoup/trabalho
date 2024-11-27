const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('root', 'usuario', 'senha', {
    host: 'localhost',
    dialect: 'mysql', 
    logging: false,
});

module.exports = sequelize;
