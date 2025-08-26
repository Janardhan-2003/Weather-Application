const {
  getPreferences,
  updatePreference,
} = require("../controllers/preferencesController");

const express = require("express");

const router = express.Router();

router.get("/:uid", getPreferences);

router.put("/", updatePreference);

module.exports = router;
