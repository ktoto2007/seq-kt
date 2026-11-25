const sequelize = require('./database')
const City = require('./models/City')
const Country = require('./models/Country')

async function seed() {
    const countries = await Country.bulkCreate([
        {name: 'Россия', continent: 'Евразия'},
        {name: 'США', continent: 'Северная Америка'},
        {name: 'Египет', continent: 'Африка'}
    ]);
    const cities = await City.bulkCreate([
        {name: 'Москва', countryId: countries[0].id},
        {name: 'Санкт-Петербург', countryId: countries[0].id},
        {name: 'Нью-Йорк', countryId: countries[1].id},
        {name: 'Каир', countryId: countries[2].id},
    ])
}

module.exports = seed