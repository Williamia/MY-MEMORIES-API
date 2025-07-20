require('dotenv').config(); 
const serverless = require('serverless-http');
const express = require('express');
const connectDB = require('../config/db');
const authRoutes = require('../routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();
app.use(express.json());

app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('API connected to MongoDB Atlas!');
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
  console.log(`API URL: http://localhost:${PORT}`);
});

console.log('Starting serverless function...');

module.exports.handler = serverless(app);