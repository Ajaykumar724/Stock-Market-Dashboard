const mongoose = require("mongoose");
require('dotenv').config();

const { Watchlist, Holdings, Positions } = require("./models/StockModel.js");
const data = require("./data/data.json"); // Your JSON file

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(async () => {
  console.log("Connected, seeding data...");

  await Watchlist.deleteMany({});
  await Holdings.deleteMany({});
  await Positions.deleteMany({});

  await Watchlist.insertMany(data.watchlist);
  await Holdings.insertMany(data.holdings);
  await Positions.insertMany(data.positions);

  console.log("Data seeded!");
  mongoose.connection.close();
}).catch(err => console.error(err));
