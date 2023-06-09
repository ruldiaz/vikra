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
            type: DataTypes.STRING,
            allowNull: false,
          },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
          },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        createdInDb: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: false,
          }
    }, {
        timestamps: false
    })
}