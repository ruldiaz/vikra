require('dotenv').config();
const app = require('./src/app');
const { conn } = require('./src/db.js');
const port = process.env.PORT || 3001;

app.listen(3001, (req, res)=>{
    console.log('Server listening on port ', 3001);
})