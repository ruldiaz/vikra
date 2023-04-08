const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('user', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        firstName: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          lastName: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
          },
    }, {
        timestamps: false
    })
}