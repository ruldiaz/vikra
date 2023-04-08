require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_DEPLOY } = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/vikra`, {
    logging: false,
    native: false,
});



  (async () => {
    await sequelize.sync();
    console.log('All models were synchronized successfully.');
  })();