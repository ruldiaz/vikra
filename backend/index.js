require('dotenv').config();
const app = require('./src/app');
const { conn } = require('./src/db.js');
const port = process.env.PORT || 3001;

<<<<<<< HEAD
app.listen(3001, (req, res)=>{
    console.log('Server listening on port ', 3001);
})
=======
// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
    server.listen(port, () => {
      console.log('%s listening at 3001'); // eslint-disable-line no-console
    });
  });
>>>>>>> 8f1d33a6e9c483cd9a4205dec890fafcdc156929
