const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();
const basketRoute = require('./Routes/baskets/basket.routes');
const novelRouter = require('./Routes/novels/novels.routes');
const userRouter = require('./Routes/users/user.routes');
const reviewRouter = require('./Routes/reviews/review.routes');
const ordersRouter = require('./Routes/orders/orders.routes');
const sellerRouter = require('./Routes/seller/seller.routes');
const {connect, sync} = require('./config/database');

// const routes = require('./Routes');
const morgan = require('morgan');

const corsOptions = {
  origin: 'http://localhost:3001',
  credentials : true
}


// Connect to the database
async function initializeDatabase() {
  await connect();
  await sync();
  
}
initializeDatabase();

app.use(cookieParser());
app.use(cors(corsOptions));
app.use(morgan('tiny'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use('/products', routes);

app.use('/user', basketRoute);
app.use('/novels', novelRouter);
app.use('/auth', userRouter);
app.use('/novel', reviewRouter);
app.use('/iduser', reviewRouter);
app.use('/order', ordersRouter);

app.use('/userseller', sellerRouter);
//create server
app.listen(3000, () => {
    console.log('Listening on port 3000');
  });
