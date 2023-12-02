const City = require("../models/city");
const mongoose = require("mongoose");

exports.getAllCities = (req, res, next) => {
    City.find() //find all elements
      .exec() 
      .then((cities) => {
        res.status(200).json(cities);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          error: err,
        });
      });
  };

  // exports.getCityById = (req, res, next) => {
  //   City.findById(req.params.cityId)
  //     .exec()
  //     .then((city) => {
  //         if (!city) {
  //             return res.status(404).json({
  //               message: "City NOT found",
  //             });
  //         }
  //         res.status(200).json(city);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       res.status(500).json({ error: err });
  //     });
  // };

  exports.getCityByName =  (req, res, next) => {
    City.find({ name: req.params.cityName })
    .exec()
    .then((city) => {
      if (!city) {
        return res.status(404).json({
          message: "City NOT found",
        });
      }
      res.status(200).json(city);
    })
    .catch(err => {
      res.status(500).json({error: err});
    });
};