const mongoose = require('mongoose');
require('dotenv').config(); 

function connectDB() {
  const uri = process.env.MONGO_URI;

  if (!uri) {
    console.error('❌ MONGO_URI not found at .env');
    return;
  }

  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('✅ Connected to MongoDB!'))
  .catch(err => console.error('❌ Error with MongoDB connection:', err));
}

module.exports = connectDB;

