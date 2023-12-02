const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const CitiesController = require('../controllers/citiesController');

router.get("/", CitiesController.getAllCities);
router.get("/:cityName", CitiesController.getCityByName);


module.exports = router;