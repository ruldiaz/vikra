require('dotenv').config();
const server = require('./src/app');
const { conn } = require('./src/db.js');
const port = process.env.PORT || 3001;

