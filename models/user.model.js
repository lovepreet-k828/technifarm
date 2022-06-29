const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {type: String, trim: true, },
  experience: {type: String, trim: true, },
  country: {type: String, trim: true, },
  state: {type: String, trim: true, },
  cityVillage: {type: String, trim: true, },
  streetName: {type: String, trim: true, },
  password: {type: String,  trim: true, },
  mobileNo: {type: String,  trim: true },
  mobileCode: {type: String,  trim: true },
}, 
{
  timestamps: true,
});

const User = mongoose.model('Users', userSchema);

module.exports = User;