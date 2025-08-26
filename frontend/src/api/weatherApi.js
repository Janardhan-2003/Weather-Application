import axios from "axios";

const API_BASE = "https://weather-application-hxb0.onrender.com";

export const getWeather = async (city) => {
  const res = await axios.get(`${API_BASE}/api/weather/current/${city}`);
  return res.data;
};

export const getForecast = async (city) => {
  const res = await axios.get(`${API_BASE}/api/weather/forecast/${city}`);
  return res.data;
};

export const getFavourites = async (uid) => {
  const res = await axios.get(`${API_BASE}/api/favourites/${uid}`);
  return res.data;
};

export const addFavourite = async (uid, cityName) => {
  const res = await axios.post(`${API_BASE}/api/favourites`, { uid, cityName });
  return res.data;
};

export const deleteFavourite = async (uid, cityName) => {
  const res = await axios.delete(`${API_BASE}/api/favourites/${uid}/${cityName}`);
  return res.data;
};

export const getPreferences = async (uid) => {
  const res = await axios.get(`${API_BASE}/api/preferences/${uid}`);
  return res.data;
};

export const savePreferences = async (uid, unit, location) => {
  const res = await axios.post(`${API_BASE}/api/preferences`, {
    uid,
    unit,
    location,
  });
  return res.data;
};
