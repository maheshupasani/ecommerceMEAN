// import config from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import cookieParser from cookie-parser;


// var createError = require('http-errors');
// var logger = require('morgan');
const app = express();

// Routes
import productRoutes from './routes/productRoutes';
import userRoutes from './routes/userRoutes';

app.use(cors({
  origin: '*',
  methods: ['GET','POST','PUT','DELETE'],
  allowedHeaders: 'Content-Type,Authorization'
}))

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));


app.use('/api/v1/products', productRoutes);
app.use('/api/v1/users',userRoutes);

app.get("*", (req, res) =>
  res.status(200).send({
    message: "Welcome to this API.",
  })
);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});

export default app;
