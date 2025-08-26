import { useEffect, useState } from "react";
import { getForecast } from "../api/weatherApi";

const ForecastCard = ({ city }) => {
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    const fetchForecast = async () => {
      try {
        const data = await getForecast(city);

        const dailyData = {};
        data.list.forEach((item) => {
          const date = new Date(item.dt * 1000).toLocaleDateString("en-US", {
            weekday: "short",
          });

          if (!dailyData[date]) {
            dailyData[date] = item; 
          }
        });

        setForecast(Object.values(dailyData).slice(0, 7)); 
      } catch (err) {
        console.error(err);
      }
    };

    fetchForecast();
  }, [city]);

  return (
    <div className="bg-gray-900 text-cyan-500 rounded-2xl p-5 shadow-lg mt-8">
      <h2 className="text-xl font-bold mb-4">7-Day Forecast</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 text-center">
        {forecast.map((day, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center bg-gray-800 p-3 rounded-xl"
          >
            <p className="font-semibold">
              {new Date(day.dt * 1000).toLocaleDateString("en-US", {
                weekday: "short",
              })}
            </p>
            <img
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
              alt={day.weather[0].description}
              className="w-12 h-12"
            />
            <p className="text-sm text-gray-300">
              {Math.round(day.main.temp)}°C
            </p>
            <span className="text-xs text-gray-400 capitalize">
                {day.weather[0].description}
              </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastCard;
