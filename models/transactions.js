const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    const transactions = sequelize.define('transactions', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        userId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'Users', 
                key: 'id'
            }
        },
        totalAmount: {
            type: Sequelize.DECIMAL,
            allowNull: false
        },
        paymentMethod: {
            type: Sequelize.STRING,
            allowNull: false
        },
        status: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });

    return transactions;
};
