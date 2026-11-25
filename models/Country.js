const { Datatypes } = require('sequelize')
const sequelize = require('../database')

const Country = sequelize.define('Country', {
    name: { type: Datatypes.STRING, allowNull: false},
    continent: { type: Datatypes.STRING, allowNull: true}
})

module.exports = Country