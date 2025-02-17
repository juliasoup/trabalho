const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    const product = sequelize.define('product', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING,
            allowNull: true
        },
        price: {
            type: Sequelize.DECIMAL,
            allowNull: false
        },
        stock: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    });

    return product;
};
