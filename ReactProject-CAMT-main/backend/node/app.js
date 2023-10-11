const express = require('express');
const app = express();

const basketRoute = require('./Routes/basket.routes');
const novelRouter = require('./Routes/novels/novels.routes');

const userRouter = require('./Routes/users/user.routes');
const reviewRouter = require('./Routes/reviews/review.routes');
const ordersRouter = require('./Routes/orders/orders.routes');
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

app.use('/user', basketRoute);
app.use('/novel', novelRouter);
app.use('/users', userRouter);
app.use('/reviews', reviewRouter);
app.use('/orders', ordersRouter);
//create server
app.listen(3000, () => {
    console.log('Listening on port 3000');
  });
