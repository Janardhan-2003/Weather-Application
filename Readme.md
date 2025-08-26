
```markdown
# 🌦️ Modern Weather App (MERN + Firebase)

A **modern weather application** built with the **MERN stack** + **Firebase Authentication**, featuring **real-time weather**, **7-day forecast**, and a sleek, responsive UI with dark/light mode.

This project is designed to showcase **full-stack development skills** with clean architecture, API integration, database usage, and modern frontend design.

---

## 🚀 Live Demo

🔗 **Live Link:** [https://weatherify-two.vercel.app/]  

---

## ✨ Features

- 🌍 **Auto-detect location** + Search by city
- ⭐ **Add/remove favorites** (stored in MongoDB per user)
- 📊 **5-day forecast** with temperature, humidity, and wind trend
- 🌅 **Sunrise & Sunset timeline**
- ⚡ **Weather alerts** (if available from API)
- 📱 **Mobile-first responsive design**

---

## 🏗️ Tech Stack

**Frontend**

- React + Vite
- TailwindCSS
- Firebase Authentication (Google Sign-in)
- Axios for API calls

**Backend**

- Node.js + Express.js
- MongoDB + Mongoose
- OpenWeather API

**Other**

- Deployed on Vercel (frontend) & Render (backend)

---

## ⚙️ Setup & Installation

### 1. Clone Repository
```bash
git clone https://github.com/janardhan-2003/weather-app.git
cd weather-app
````

### 2. Backend Setup

```bash
cd backend
npm install
```

- Create `.env` file:

```env
PORT=5000
MONGO_URI=your_mongo_connection_string
OPENWEATHER_API_KEY=your_openweather_api_key
```

- Run backend:

```bash
npm start
```

### 3. Frontend Setup

```bash
cd frontend
npm install
```

- Add Firebase config in `/src/firebase/FirebaseConfig.js`

- Run frontend:

```bash
npm run dev
```

---

## 🌐 API Endpoints (Backend)

### Weather

- `GET /api/weather/:city` → Current weather
- `GET /api/forecast/:city` → 5-day/7-day forecast

### Favourites

- `GET /api/favourites/:uid` → Get user favourites
- `POST /api/favourites/:uid` → Add favourite city
- `DELETE /api/favourites/:uid/:city` → Remove favourite

## 🔑 API Reference

We use **OpenWeather API**:

- [Current Weather](https://openweathermap.org/current)
- [5-Day/3-Hour Forecast](https://openweathermap.org/forecast5)

---
