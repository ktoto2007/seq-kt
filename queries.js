const sequelize = require('./database');
const City = require('./models/City')
const Country = require('./models/Country')

async function getCountries() {
    const countries = await Country.findAll()
    return countries
}

async function getCountriesWithCities(params) {
    const result = await Country.findAll({
        include: [{model: City, as: 'cities'}]
    })
}

async function getCountriesByPk(pk) {
    const result = await Country.findByPk(pk)
    return result
}

async function getCitiesFromRussia(params) {
    const result = await City.findAll({
        include: [{
            model: Country,
            as: 'country',
            where: {name: 'Россия'}
        }]
    })
}

module.exports = {getCountries, getCitiesFromRussia, getCountriesWithCities, getCountriesByPk}