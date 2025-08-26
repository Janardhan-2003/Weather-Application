import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import {
  getFavourites,
  addFavourite,
  deleteFavourite,
  getWeather,
} from "../api/weatherApi";
import WeatherCard from "../components/weatherCard";
import Cookies from "js-cookie";

const FavouritesPage = () => {
  const uid = Cookies.get("userID");
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchFavourites = async () => {
    try {
      setLoading(true);
      const favs = await getFavourites(uid);

      const weatherResponses = await Promise.all(
        favs.map((fav) =>
          getWeather(fav.cityName).then((weather) => ({
            ...weather,
            cityName: fav.cityName, 
          }))
        )
      );

      setWeatherData(weatherResponses);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFavourites();
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!city) return;

    const normalizedCity = city.trim().toLowerCase();

  const exists = weatherData.some(
    (weather) => weather.cityName?.toLowerCase() === normalizedCity
  );

  if (exists) {
    alert("City already in favourites!"); // or use toast
    return;
  }

    try {
      await addFavourite(uid, city);
      setCity("");
      fetchFavourites();
    } catch (err) {
      console.error(err);
    }
  };

  const handleRemove = async (cityName) => {
    try {
      await deleteFavourite(uid, cityName);
      fetchFavourites();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-[#0d0d0d] text-white p-6">
      <h1 className="text-3xl font-bold text-cyan-400 mb-6">
        🌍 My Favourites
      </h1>

      <form onSubmit={handleAdd} className="flex justify-center gap-3 mb-8">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name..."
          className="px-4 py-2 rounded-xl bg-gray-800 border border-gray-600 text-white w-72 focus:ring-2 focus:ring-cyan-500 outline-none"
        />
        <button
          type="submit"
          className="px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-600 transition"
        >
          + Add
        </button>
      </form>

      {loading && <p className="text-gray-400 text-center">Loading...</p>}

      {weatherData.length === 0 && !loading ? (
        <p className="text-gray-400 text-center">
          No favourites yet. Add one above!
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {weatherData.map((weather, idx) => (
            <div key={idx} className="relative">
              <WeatherCard weather={weather} />

              <button
                onClick={() => handleRemove(weather.cityName)}
                className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-lg hover:bg-red-600 text-sm"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
    </>
  );
};

export default FavouritesPage;
