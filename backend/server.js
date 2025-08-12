const express = require("express");
const cors = require("cors");
require('dotenv').config();
const mongoose = require("mongoose");

const Watchlist = require("./models/Watchlist");
const Holdings = require("./models/Holdings");
const Positions = require("./models/Positions");

const app = express();
const PORT = 3002;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

app.get("/data", async (req, res) => {
  try {
    const watchlist = await Watchlist.find();
    const holdings = await Holdings.find();
    const positions = await Positions.find();
    res.json({ watchlist, holdings, positions });
  } catch (err) {
    res.status(500).json({ error: "Error fetching data from DB" });
  }
});

app.get("/history/:ticker", async (req, res) => {
  const { ticker } = req.params;
  const found = await Watchlist.findOne({ name: ticker });

  if (!found) {
    return res.status(404).json({ error: "Ticker not found in watchlist" });
  }

  const chartData = Array.from({ length: 7 }, (_, i) => ({
    date: new Date(Date.now() - i * 86400000).toISOString().split("T")[0],
    close: parseFloat((found.price + (Math.random() - 0.5) * 10).toFixed(2))
  })).reverse();

  res.json(chartData);
});

app.listen(PORT, () => {
  console.log(`Server running on Port : ${PORT}`);
});
