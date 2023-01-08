import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { API_URL, DB_URL } from './configs/index';
import routes from './routes';

mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
  console.log('connected to mongoDB')
})

mongoose.connection.on('error', (err) => {
  console.log('err connecting', err)
})

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(API_URL, routes);
export default app;