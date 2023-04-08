const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));

app.get('/', (req, res)=>{
    res.status(200).send('endpoint')
})
app.listen(3001, (req, res)=>{
    console.log('Server listening on port ', 3001);
})