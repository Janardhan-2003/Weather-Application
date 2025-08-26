const {
  getFavourites,
  postFavourites,
  deleteFavourite,
} = require("../controllers/favouritesController");

const express = require("express");

const router = express.Router();

router.get("/", getFavourites);

router.post("/", postFavourites);

router.delete("/:cityName", deleteFavourite);

module.exports(router);
