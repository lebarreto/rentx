require('dotenv').config();

import 'reflect-metadata';
import 'dotenv/config';
import 'express-async-errors';

import express from 'express';
import cors from 'cors';
import uploadConfig from './config/multer';

import './database';

import routes from './routes';

const app = express();
app.use('/files', express.static(uploadConfig.uploadsFolder));

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3000, () => {
  console.log('🚀 Server started on port 3000');
});