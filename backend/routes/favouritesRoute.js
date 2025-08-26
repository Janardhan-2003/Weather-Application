const {
  getFavourites,
  postFavourites,
  deleteFavourite,
} = require("../controllers/favouritesController");

const express = require("express");

const router = express.Router();

router.get("/:uid", getFavourites);

router.post("/", postFavourites);

router.delete("/:uid/:cityName", deleteFavourite);

module.exports=router;
