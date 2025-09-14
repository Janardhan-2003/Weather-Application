Here’s your README rewritten into a **polished `.md` file** with **icons for each technology**:

````markdown
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

## 🚀 Quick Start

### **Prerequisites**
- Node.js (v18 or higher)
- npm or yarn
- MongoDB Atlas account
- Firebase project
- OpenWeather API key

### **1. Clone the Repository**
```bash
git clone https://github.com/janardhan-2003/weather-app.git
cd weather-app
```

### **2. Install Dependencies**

**Frontend Setup:**
```bash
cd frontend
npm install
```

**Backend Setup:**
```bash
cd backend
npm install
```

### **3. Environment Configuration**

**Frontend Environment (`frontend/.env`):**
```env
# Firebase Configuration
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id

# API Configuration
VITE_API_URL=http://localhost:5000
```

**Backend Environment (`backend/.env`):**
```env
# Database Configuration
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/weatherify

# API Keys
OPENWEATHER_API_KEY=your_openweather_api_key

# Server Configuration
PORT=5000
```

### **4. Start Development Servers**

**Backend Server:**
```bash
cd backend
npm start
```

**Frontend Development Server:**
```bash
cd frontend
npm run dev
```

**🎉 Your application will be running at:**
- Frontend: `http://localhost:5173`
- Backend: `http://localhost:5000`

---

## 📁 Project Structure

```
weather-app/
├── 📁 frontend/
│   ├── 📁 src/
│   │   ├── 📁 components/          # Reusable UI components
│   │   │   ├── ForecastCard.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── ProtectedRoute.jsx
│   │   │   └── WeatherCard.jsx
│   │   ├── 📁 pages/               # Page components
│   │   │   ├── FavouritesPage.jsx
│   │   │   ├── HomePage.jsx
│   │   │   └── LoginPage.jsx
│   │   ├── 📁 api/                 # API integration
│   │   │   └── weatherApi.js
│   │   ├── 📁 firebase/            # Firebase configuration
│   │   │   └── FirebaseConfig.js
│   │   └── 📁 assets/              # Static assets
│   ├── package.json
│   └── vite.config.js
├── 📁 backend/
│   ├── 📁 controllers/             # Business logic
│   │   ├── favouritesController.js
│   │   ├── preferencesController.js
│   │   └── weatherController.js
│   ├── 📁 models/                  # Database models
│   │   ├── favourites.model.js
│   │   └── preferences.model.js
│   ├── 📁 routes/                  # API routes
│   │   ├── favouritesRoute.js
│   │   ├── preferencesRoute.js
│   │   └── weatherRoute.js
│   ├── 📁 config/                  # Configuration files
│   │   └── db.js
│   ├── server.js                   # Main server file
│   └── package.json
└── README.md
```

---

## 🌐 API Endpoints

### **Weather Endpoints**
```
GET  /api/weather/current/:city     # Get current weather
GET  /api/weather/forecast/:city    # Get 5-day forecast
```

### **Favorites Endpoints**
```
GET    /api/favourites/:userId      # Get user favorites
POST   /api/favourites              # Add favorite
DELETE /api/favourites/:id          # Remove favorite
```

### **Preferences Endpoints**
```
GET    /api/preferences/:userId     # Get user preferences
POST   /api/preferences             # Update preferences
```

---

## 🚀 Deployment

### **Frontend (Vercel)**
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### **Backend (Render)**
1. Connect your GitHub repository to Render
2. Set environment variables in Render dashboard
3. Configure build and start commands

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### **Development Guidelines**
- Follow ESLint configuration
- Write meaningful commit messages
- Test your changes thoroughly
- Update documentation if needed

---

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Janardhan**
- GitHub: [@janardhan-2003](https://github.com/janardhan-2003)
- Project Link: [Weatherify](https://github.com/janardhan-2003/weather-app)

---

## 🙏 Acknowledgments

- **OpenWeather API** for providing comprehensive weather data
- **Firebase** for authentication services
- **Vercel** for frontend hosting
- **Render** for backend hosting
- **TailwindCSS** for beautiful styling
- **React Community** for excellent documentation

---

<div align="center">

### 🌟 **Star this repository if you found it helpful!**

[![GitHub stars](https://img.shields.io/github/stars/janardhan-2003/weather-app?style=social)](https://github.com/janardhan-2003/weather-app)
[![GitHub forks](https://img.shields.io/github/forks/janardhan-2003/weather-app?style=social)](https://github.com/janardhan-2003/weather-app)
[![GitHub watchers](https://img.shields.io/github/watchers/janardhan-2003/weather-app?style=social)](https://github.com/janardhan-2003/weather-app)

**Made with ❤️ and modern web technologies**

</div>