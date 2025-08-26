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
app.use(cors());

DBConnection();

app.use("/api/favourites", favouriteRoutes);
app.use("/api/preferences", preferenceRoutes);
app.use("/api/weather", weatherRoutes);

app.listen(port, () => {
  console.log(`Sever started on port ${port}...!!!!!!`);
});
