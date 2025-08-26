const axios = require("axios");

const getCurrentWeather = async (req, res) => {
  try {
    const { city } = req.params;
    if (!city) return res.status(400).json({ message: "City required" });

    const apiKey = process.env.OPENWEATHER_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ message: "Missing OpenWeather API key" });
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const { data } = await axios.get(url);
    res.json(data);
  } catch (error) {
    res.status(500).json({
      message: "Current weather fetch failed",
      error: error.response?.data || error.message,
    });
  }
};

const getForecast = async (req, res) => {
  try {
    const { city } = req.params;
    if (!city) return res.status(400).json({ message: "City required" });

    const apiKey = process.env.OPENWEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    const { data } = await axios.get(url);
    res.json(data);
  } catch (error) {
    res.status(500).json({
      message: "Forecast fetch failed",
      error: error.response?.data || error.message,
    });
  }
};

module.exports = { getCurrentWeather, getForecast };
