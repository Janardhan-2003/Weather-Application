const express = require("express");
const {
  getCurrentWeather,
  getForecast,
} = require("../controllers/weatherController");

const router = express.Router();
router.get("/current/:city", getCurrentWeather);
router.get("/forecast/:city", getForecast);

module.exports = router;
