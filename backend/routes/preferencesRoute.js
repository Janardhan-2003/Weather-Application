const {
  getPreferences,
  updatePreference,
} = require("../controllers/preferencesController");

const express = require("express");

const router = express.Router();

router.get("/", getPreferences);

router.update("/", updatePreference);

module.exports = router;
