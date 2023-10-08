const express = require('express');
const app = express();
const router = require('./Routes/users/user.routes');
const {connect, sync} = require('./config/database');
// const routes = require('./Routes');
const morgan = require('morgan');

// Connect to the database
async function initializeDatabase() {
  await connect();
  await sync();
}
initializeDatabase();

app.use(morgan('tiny'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use('/products', routes);
app.use('/user', router);


//create server
app.listen(3000, () => {
    console.log('Listening on port 3000');
  });
