<div align="center">

# 🌦️ Weatherify - Modern Weather Application

[![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongodb.com/)
[![Firebase](https://img.shields.io/badge/Firebase-Auth-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.12-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

**A sophisticated weather application built with modern technologies, featuring real-time weather data, personalized favorites, and stunning UI/UX.**

[🌐 Live Demo](https://weatherify-two.vercel.app/) • [📖 Documentation](#-features) • [🚀 Quick Start](#-quick-start)

---

</div>

## 📸 Project Preview

<table>
<tr>
<td width="50%">

### 🏠 Home Dashboard
- **Real-time weather data**
- **Interactive weather cards**
- **Location-based forecasts**
- **Beautiful animations with Framer Motion**

</td>
<td width="50%">

### ⭐ Favorites Management
- **Personalized city lists**
- **Quick weather access**
- **MongoDB persistence**
- **User-specific data storage**

</td>
</tr>
<tr>
<td width="50%">

### 📊 Advanced Forecast
- **5-day detailed forecast**
- **Temperature trends**
- **Humidity & wind data**
- **Interactive charts with Recharts**

</td>
<td width="50%">

### 🔐 Secure Authentication
- **Firebase Authentication**
- **Protected routes**
- **User session management**
- **Responsive login system**

</td>
</tr>
</table>

---

## ✨ Key Features

### 🌍 **Smart Location Services**
- **Auto-detection** of user's current location
- **Manual city search** with autocomplete
- **Global coverage** with accurate weather data
- **Geolocation API integration**

### ⭐ **Personalized Experience**
- **Favorites system** with MongoDB storage
- **User-specific preferences**
- **Quick access to favorite locations**
- **Persistent data across sessions**

### 📊 **Comprehensive Weather Data**
- **Real-time current conditions**
- **5-day detailed forecast**
- **Temperature, humidity, wind speed**
- **Weather alerts and notifications**
- **Sunrise/sunset information**

### 🎨 **Modern UI/UX**
- **Responsive design** for all devices
- **Smooth animations** with Framer Motion
- **Interactive charts** with Recharts
- **Beautiful icons** from Lucide React
- **Professional color scheme**

### 🔒 **Security & Performance**
- **Firebase Authentication**
- **Protected routes and components**
- **Environment variable management**
- **Optimized API calls**
- **Error handling and validation**

---

## 🛠️ Technology Stack

### **Frontend Technologies**
<table>
<tr>
<td align="center" width="20%">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="40" height="40" />
<br/><b>React 19.1.1</b>
</td>
<td align="center" width="20%">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" width="40" height="40" />
<br/><b>TailwindCSS 4.1.12</b>
</td>
<td align="center" width="20%">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" width="40" height="40" />
<br/><b>Vite</b>
</td>
<td align="center" width="20%">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" width="40" height="40" />
<br/><b>Firebase</b>
</td>
<td align="center" width="20%">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/axios/axios-original.svg" width="40" height="40" />
<br/><b>Axios</b>
</td>
</tr>
</table>

### **Backend Technologies**
<table>
<tr>
<td align="center" width="25%">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="40" height="40" />
<br/><b>Node.js</b>
</td>
<td align="center" width="25%">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" width="40" height="40" />
<br/><b>Express.js</b>
</td>
<td align="center" width="25%">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" width="40" height="40" />
<br/><b>MongoDB</b>
</td>
<td align="center" width="25%">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongoose/mongoose-original.svg" width="40" height="40" />
<br/><b>Mongoose</b>
</td>
</tr>
</table>

### **Additional Libraries**
- **Framer Motion** - Smooth animations and transitions
- **Recharts** - Interactive data visualization
- **Lucide React** - Beautiful icon library
- **React Icons** - Comprehensive icon collection
- **React Router DOM** - Client-side routing
- **JS Cookie** - Cookie management

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

**Made with ❤️ and modern web technologies**

</div>