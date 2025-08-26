import { WiHumidity, WiStrongWind } from "react-icons/wi";
import { FiThermometer } from "react-icons/fi";

const WeatherCard = ({ weather }) => {
  if (!weather) return null;

  const { name, sys, main, weather: weatherInfo, wind, dt } = weather;

  const condition = weatherInfo[0];
  const updatedAt = new Date(dt * 1000).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] p-6 rounded-2xl shadow-lg border border-gray-700 w-full max-w-md mx-auto mt-10 backdrop-blur-md">
      {/* City + Country */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-cyan-400">
          {name}, <span className="text-gray-300">{sys?.country}</span>
        </h2>
        <span className="text-sm text-gray-400">Updated {updatedAt}</span>
      </div>

      {/* Temperature + Icon */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-6xl font-extrabold text-white">
            {Math.round(main?.temp)}°C
          </h1>
          <p className="text-lg text-gray-300 capitalize">
            {condition?.description}
          </p>
        </div>
        <img
          src={`https://openweathermap.org/img/wn/${condition?.icon}@4x.png`}
          alt="Weather Icon"
          className="w-28 h-28 drop-shadow-lg"
        />
      </div>

      {/* Weather details */}
      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="flex flex-col items-center bg-gray-800/40 rounded-xl p-3">
          <FiThermometer className="text-red-400 text-2xl" />
          <span className="text-white font-semibold">
            {Math.round(main?.feels_like)}°C
          </span>
          <span className="text-xs text-gray-400">Feels like</span>
        </div>

        <div className="flex flex-col items-center bg-gray-800/40 rounded-xl p-3">
          <WiHumidity className="text-blue-400 text-3xl" />
          <span className="text-white font-semibold">{main?.humidity}%</span>
          <span className="text-xs text-gray-400">Humidity</span>
        </div>

        <div className="flex flex-col items-center bg-gray-800/40 rounded-xl p-3">
          <WiStrongWind className="text-green-400 text-3xl" />
          <span className="text-white font-semibold">{wind?.speed} m/s</span>
          <span className="text-xs text-gray-400">Wind</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
