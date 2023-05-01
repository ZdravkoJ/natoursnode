const express = require('express');
const morgan = require('morgan');

const AppError = require('./utels/appError');
const globalError = require('./controllers/errorController');
const tourRouter = require('./routes/tourRouts');
const userRouter = require('./routes/userRouts');

const app = express();

////1. MIDDLEWARES
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

////2. ROUTES/tours/:id', deleteTour);

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on the server!`, 404));
});

app.use(globalError);

module.exports = app;
