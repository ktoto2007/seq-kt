const { DataTypes } = require('sequelize')
const sequelize = require('../database')

const Country = sequelize.define('Country', {
    name: { type: DataTypes.STRING, allowNull: false},
    continent: { type: DataTypes.STRING, allowNull: true}
})

module.exports = Country