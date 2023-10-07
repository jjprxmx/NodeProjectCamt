const express = require('express');
const app = express();
<<<<<<< Updated upstream
const basketRoute = require('./Routes/basket.routes');
// const routes = require('./Routes');
=======
const routes = require('./Routes/user');
>>>>>>> Stashed changes
const morgan = require('morgan');

app.use(morgan('tiny'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

<<<<<<< Updated upstream
// app.use('/products', routes);
app.use('/user', basketRoute);
=======
app.use('/users', routes);
>>>>>>> Stashed changes


//create server
app.listen(3000, () => {
    console.log('Listening on port 3000');
  });
