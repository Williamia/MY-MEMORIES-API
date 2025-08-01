const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true , trim: true },
  email: { type: String, required: true, unique: true, match: /.+\@.+\..+/ }, 
  password: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);