const { Datatypes } = require('sequelize')
const sequelize = require('../database')

const City = sequelize.define('City', {
    name: { type: Datatypes.STRING, allowNull: false},
})

module.exports = City