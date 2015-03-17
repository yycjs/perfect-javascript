import express from 'express';
import path from 'path';

const app = express();
const isProduction = process.env.NODE_ENV === 'production';
const publicPath = isProduction ? path.join(__dirname, '..', 'dist') : path.join(__dirname, '..');

app.use('/', express.static(publicPath));

export default app;
