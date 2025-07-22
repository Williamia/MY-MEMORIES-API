require('dotenv').config(); 
const serverless = require('serverless-http');
const cors = require('cors');
const express = require('express');
const connectDB = require('../config/db');
const authRoutes = require('../routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();
app.use(express.json());

app.use(cors({ origin: 'https://my-memories-two.vercel.app' }));

app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('API connected to MongoDB Atlas!');
});

console.log('Starting serverless function...');

module.exports = app;
module.exports.handler = serverless(app);