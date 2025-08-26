# 🌦️ Modern Weather App (MERN + Firebase)

A **modern weather application** built with the **MERN stack** + **Firebase Authentication**, featuring **real-time weather**, **7-day forecast**, and a sleek, responsive UI with dark/light mode.  

This project is designed to showcase **full-stack development skills** with clean architecture, API integration, database usage, and modern frontend design.  

---

## 🛠️ Tech Stack  

<p align="center">
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" />
  <img src="https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white" />
</p>  

---

## 🚀 Live Demo  

🔗 **Live Link:** [Live](https://weatherify-two.vercel.app/)  

---

## ✨ Features  

- 🌍 **Auto-detect location** + Search by city  
- ⭐ **Add/remove favorites** (stored in MongoDB per user)  
- 📊 **5-day forecast** with temperature, humidity, and wind trend  
- 🌅 **Sunrise & Sunset timeline**  
- ⚡ **Weather alerts** (if available from API)  
- 📱 **Mobile-first responsive design**  

---

## ⚙️ Setup & Installation  

### 1. Clone Repository  
```bash
git clone https://github.com/janardhan-2003/weather-app.git
cd weather-app

## 🚀 Live Demo  

🔗 **Live Link:** [Live](https://weatherify-two.vercel.app/)  

---

## ✨ Features  

- 🌍 **Auto-detect location** + Search by city  
- ⭐ **Add/remove favorites** (stored in MongoDB per user)  
- 📊 **5-day forecast** with temperature, humidity, and wind trend  
- 🌅 **Sunrise & Sunset timeline**  
- ⚡ **Weather alerts** (if available from API)  
- 📱 **Mobile-first responsive design**  

---

## ⚙️ Setup & Installation  

### 1. Clone Repository  
```bash
git clone https://github.com/janardhan-2003/weather-app.git
cd weather-app
````

### 2. Install Dependencies

Frontend

```bash
cd frontend
npm install
```

Backend

```bash
cd backend
npm install
```

### 3. Setup Environment Variables

Create a `.env` file in both **frontend** and **backend** folders with:

**Frontend (`frontend/.env`)**

```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_API_URL=http://localhost:5000
```

**Backend (`backend/.env`)**

```env
MONGO_URI=your_mongodb_connection_string
OPENWEATHER_API_KEY=your_openweather_api_key
PORT=5000
```

### 4. Run Locally

Backend

```bash
cd backend
npm start
```

Frontend

```bash
cd frontend
npm run dev
```


