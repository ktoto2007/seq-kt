const City = require('./City')
const Country = require('./Country')
const testConnection = require('../test-connection')
const sequelize = require('../database')
const seed = require('../seed')
const {getCountries, getCitiesFromRussia, getCountriesWithCities, getCountriesByPk} = require('../queries')

Country.hasMany(City, {foreignKey: 'countryId', as: 'cities'})
City.belongsTo(Country, {foreignKey: 'countryId', as: 'country'})

async function main(pk) {
    try {
    await sequelize.sync({ force: true });
    console.log('Таблицы синхронизированы.');

    await seed()
    
    console.log('getCountries:');
    console.log(JSON.stringify(await getCountries(), null, 2));

    console.log('getCitiesFromRussia:');
    console.log(JSON.stringify(await getCitiesFromRussia(), null, 2));

    console.log('getCountriesWithCities:');
    console.log(JSON.stringify(await getCountriesWithCities(), null, 2));

    console.log('getCountriesByPk:');
    console.log(JSON.stringify(await getCountriesByPk(pk), null, 2));

  } catch (error) {
    console.error('Ошибка:', error);
  } finally {
    await sequelize.close();
  }
}

main()