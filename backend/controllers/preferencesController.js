const Preferences = require("../models/peferences.model");

const getPreferences = async (req, res) => {
  try {
    const { uid } = req.query;

    if (!uid) {
      return res.status(400).json({ message: "UID is required" });
    }

    const result = await Preferences.findOne({ uid });

    if (!result) {
      return res.status(404).json({ message: "Not found" });
    }
    res.json(result);
  } catch (e) {
    res.status(500).json({ message: "Server error", error: e.message });
  }
};

const updatePreference = async (req, res) => {
  try {
    const { uid, unit, lastLocation } = req.body;

    if (!uid) {
      return res.status(400).json({ message: "UID is required" });
    }
    const updated = await Preferences.updateOne(
      { uid },
      { unit, lastLocation },
      { upsert: true, new: true }
    );

    res.json(updated);
  } catch (e) {
    res.status(500).json({ message: "Server error", error: e.message });
  }
};

module.exports = { getPreferences, updatePreference };
