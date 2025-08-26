const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const DBConnection = require("./config/db");

const favouriteRoutes = require("./routes/favouritesRoute");
const preferenceRoutes = require("./routes/preferencesRoute");
const weatherRoutes = require("./routes/weatherRoute");

dotenv.config();

const port = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(cors({
  origin: ["http://localhost:5173", "https://your-frontend.vercel.app"], // add frontend URLs
  methods: ["GET", "POST", "DELETE"]
}));

DBConnection();

app.use("/api/favourites", favouriteRoutes);
app.use("/api/preferences", preferenceRoutes);
app.use("/api/weather", weatherRoutes);

app.listen(port, () => {
  console.log(`Server started on port ${port}...!!!!!!`);
});
