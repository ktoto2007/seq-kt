const sequelize = require('./database');

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Соединение с базой данных установлено успешно.');
  } catch (error) {
    console.error('Не удалось подключиться к базе данных:', error);
  }
}

module.exports = testConnection