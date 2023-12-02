const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const BookingsController = require('../controllers/bookingsController');

router.get("/", BookingsController.getAllBookings);
// router.get("/:bookingId", BookingsController.getBookingById);
// router.delete("/:bookingId", BookingsController.deleteBooking);
router.post("/", BookingsController.createBooking);

module.exports = router;