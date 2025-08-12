const mongoose = require("mongoose");

const watchlistSchema = new mongoose.Schema({
  name: String,
  price: Number,
  percent: String,
  isDown: Boolean
});

const holdingsSchema = new mongoose.Schema({
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  net: String,
  day: String,
  isLoss: Boolean
});

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

const Watchlist = mongoose.model("Watchlist", watchlistSchema);
const Holdings = mongoose.model("Holdings", holdingsSchema);
const Positions = mongoose.model("Positions", positionsSchema);

module.exports = { Watchlist, Holdings, Positions };
