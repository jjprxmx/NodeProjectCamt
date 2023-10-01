const express = require('express');
const app = express();
const routes = require('./routes/products');
const morgan = require('morgan');

app.use(morgan('tiny'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/products', routes);


//create server
app.listen(3000, () => {
    console.log('Listening on port 3000');
  });
