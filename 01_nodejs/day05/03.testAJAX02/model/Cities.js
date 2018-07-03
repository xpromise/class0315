const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const citySchema = new Schema({
  code: String,
  province: String,
  city: String,
  county: String,
  name: String,
  level: Number
})
const Cities = mongoose.model('Cities', citySchema);
module.exports = Cities;