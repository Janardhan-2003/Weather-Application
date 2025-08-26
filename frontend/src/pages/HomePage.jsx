import { useEffect, useState } from "react";
import WeatherCard from "../components/weatherCard";
import ForecastCard from "../components/ForecastCard";
import Navbar from "../components/Navbar";
import { getWeather, getForecast } from "../api/weatherApi";
import axios from "axios";

const HomePage = () => {
  const [city, setCity] = useState("Hyderabad");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);

  const fetchWeather = async () => {
    try {
      const data = await getWeather(city);
      setWeather(data);
      console.log("Weather Data:", data);

      const forecast = await getForecast(city);
      console.log("Forecast:", forecast);
      setForecast(forecast.list.slice(0, 7));
      setCity('')
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchWeather();
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#0d0d0d] text-white p-6">
        <form
          onSubmit={handleSearch}
          className="flex justify-center items-center gap-2 mb-6"
        >
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="px-4 py-2 rounded-xl bg-gray-800 border border-gray-600 text-white w-72 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            placeholder="Search for a city..."
          />
          <button
            type="submit"
            className="px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white font-semibold shadow-md"
          >
            Search
          </button>
        </form>

        <WeatherCard weather={weather} />
        <ForecastCard city={city} />
      </div>
    </>
  );
};

export default HomePage;
