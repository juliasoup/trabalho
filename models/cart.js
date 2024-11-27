const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    const cart = sequelize.define('cart', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        userId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'Users', // Nome da tabela de usuários
                key: 'id'
            }
        },
        items: {
            type: Sequelize.JSON,
            allowNull: false
        }
    });

    return cart;
};

