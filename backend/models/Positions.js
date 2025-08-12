const mongoose = require("mongoose");

const positionsSchema = new mongoose.Schema({
  product: String,
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  net: String,
  day: String,
  isLoss: Boolean
});

module.exports = mongoose.model("Positions", positionsSchema);
