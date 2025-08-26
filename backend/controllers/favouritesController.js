const Favourite = require("../models/favourites.model");

const getFavourites = async (req, res) => {
  try {
    const { uid } = req.params;

    if (!uid) {
      return res.status(400).json({ message: "UID Required" });
    }

    const favourites = await Favourite.find({ uid });
    res.json(favourites);
  } catch (e) {
    res.status(500).json("Server Error", e.message);
  }
};

const postFavourites = async (req, res) => {
  try {
    const { uid, cityName, country, lat, lon } = req.body;

    if (!uid || !cityName) {
      return res.status(400).json({ message: "UID and cit name required" });
    }

    const favourite = await Favourite.create({
      uid,
      cityName,
      country,
      lat,
      lon,
    });

    res.status(201).json(favourite);
  } catch (e) {
    if (e.code === 11000) {
      return res.status(400).json({ message: "City already in favourites" });
    }

    res.status(500).json({ message: "Server error", error: e.message });
  }
};

const deleteFavourite = async (req, res) => {
  try {
    const { uid } = req.query;
    const { cityName } = req.params;

    if (!uid || !cityName) {
      return res
        .status(400)
        .json({ message: "UID and city Name are required" });
    }

    const result = await Favourite.findOneAndDelete({ uid, cityName });

    if (!result) {
      return res.status(404).json({ message: "Favourite not found" });
    }
    res.json("Favourite removed");
  } catch (e) {
    res.status(500).json({ message: "Server Error", error: e.message });
  }
};

module.exports = { getFavourites, postFavourites, deleteFavourite };
