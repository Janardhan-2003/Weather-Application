import { useState } from "react";
import { motion } from "framer-motion";
import { Sun, Star, MapPin, LogOut } from "lucide-react";

const HomePage=()=> {
  const [isFav, setIsFav] = useState(false);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700 text-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full flex justify-between items-center px-6 py-4 backdrop-blur-xl bg-white/10 border-b border-white/20 z-50">
        <h1 className="text-2xl font-bold">🌤 Weatherly</h1>
        <div className="flex gap-4 items-center">
          <button className="p-2 rounded-full hover:bg-white/20"><Sun /></button>
          <button className="p-2 rounded-full hover:bg-white/20"><Star /></button>
          <button className="p-2 rounded-full hover:bg-white/20"><LogOut /></button>
        </div>
      </nav>

      {/* Hero Weather Card */}
      <div className="flex flex-col items-center justify-center pt-32 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-lg rounded-3xl backdrop-blur-xl bg-white/10 border border-white/20 p-6 shadow-2xl text-center relative"
        >
          <button 
            onClick={() => setIsFav(!isFav)} 
            className="absolute top-4 right-4 text-yellow-400"
          >
            {isFav ? "⭐" : "☆"}
          </button>
          <h2 className="text-3xl font-semibold flex justify-center items-center gap-2">
            Hyderabad <MapPin className="w-6 h-6" />
          </h2>
          <p className="text-6xl font-bold mt-4">28°C</p>
          <p className="text-lg">☁ Cloudy</p>
          <div className="mt-4 flex justify-around text-sm opacity-90">
            <span>🌡 Feels like: 30°C</span>
            <span>💧 Humidity: 70%</span>
            <span>💨 Wind: 8 km/h</span>
          </div>
        </motion.div>

        {/* Search */}
        <div className="mt-6 w-full max-w-lg flex gap-2">
          <input 
            type="text" 
            placeholder="Search city..." 
            className="flex-1 px-4 py-2 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 outline-none text-white placeholder-white/70"
          />
          <button className="px-4 py-2 rounded-2xl bg-gradient-to-r from-pink-500 to-yellow-400 font-medium">
            🔍
          </button>
          <button className="px-4 py-2 rounded-2xl bg-gradient-to-r from-blue-400 to-green-400 font-medium">
            📍
          </button>
        </div>

        {/* Forecast Cards */}
        <div className="mt-8 flex gap-4 overflow-x-auto w-full max-w-3xl pb-4">
          {["Mon", "Tue", "Wed", "Thu", "Fri"].map((day, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.05 }}
              className="min-w-[120px] rounded-2xl bg-white/10 backdrop-blur-lg p-4 text-center border border-white/20"
            >
              <p>{day}</p>
              <p className="text-2xl">🌤</p>
              <p>26° / 18°</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage