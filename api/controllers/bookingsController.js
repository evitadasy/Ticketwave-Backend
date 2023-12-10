const Event = require("../models/event");
const Booking = require("../models/booking");
const mongoose = require("mongoose");

exports.getAllBookings = (req, res, next) => {
  Booking.find() //find all elements
    .populate('event') // adds all the properties of each event
    .exec() // to get a true promise
    .then((bookings) => {
      res.status(200).json(bookings);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
  };

  exports.getBookingById = (req, res, next) => {
    Booking.findById(req.params.bookingId)
      .exec()
      .then((booking) => {
          if (!booking) {
              return res.status(404).json({
                message: "Booking NOT found",
              });
          }
          res.status(200).json(booking);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ error: err });
      });
  };

  exports.deleteBooking = (req, res, next) => {
    const id = req.params.bookingId;
    Booking.deleteOne({ _id: id })
      .exec()
      .then(result => {
        res.status(200).json({
          message: "Booking deleted successfully"        
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ error: err });
      });
  };

  exports.createBooking = (req, res, next) => {
    const eventId = req.params.eventId;
    const { quantity } = req.body;
  
    // Validate that the event exists
    Event.findById(eventId)
      .exec()
      .then((event) => {
        if (!event) {
          return res.status(404).json({ message: 'Event not found' });
        }
  
        // Create a new booking based on the Booking schema
        const booking = new Booking({
          _id: new mongoose.Types.ObjectId(),
          event: eventId,
          quantity: quantity || 1, // Default to 1 if quantity is not provided
        });
  
        // Save the booking to the database
        return booking.save();
      })
      .then((savedBooking) => {
        res.status(201).json({
          message: 'Booking created successfully',
          booking: savedBooking,
        });
      })
      .catch((error) => {
        // Handle any errors that occur during the process
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      });
  };