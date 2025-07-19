const express = require('express');
const connectDB = require('./db');
require('dotenv').config(); 

const app = express();
connectDB();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API connected to MongoDB Atlas!');
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
  console.log(`API URL: http://localhost:${PORT}`);
});

