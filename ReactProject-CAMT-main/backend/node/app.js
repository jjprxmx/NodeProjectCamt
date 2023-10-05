const express = require('express');
const app = express();
const basketRoute = require('./Routes/basket');
// const routes = require('./Routes');
const morgan = require('morgan');

app.use(morgan('tiny'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use('/products', routes);
app.use('/user', basketRoute);


//create server
app.listen(3000, () => {
    console.log('Listening on port 3000');
  });
