const Event = require("../models/event");
const Booking = require("../models/booking");
const mongoose = require("mongoose");

exports.getAllBookings = (req, res, next) => {
    Booking.find() //find all elements
      .populate('event') // adds all the properties of each event
      .exec() // to get a true promise
      .then((docs) => {
        const response = {
          count: docs.length,
          bookings: docs.map((doc) => {
            return {
              event: doc.event,
              quantity: doc.quantity,
              _id: doc._id
            };
          }),
        };
        console.log(docs);
        res.status(200).json(response);
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
          res.status(200).json({
              message: "Booking was fetched",
              booking: booking
            });
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
    //first we check if the event exists before we try to save it
    Event.findById(req.body.eventId)
      .then((event) => {
        //if event is null
        if (!event) {
          return res.status(404).json({
            message: "Event NOT found",
          });
        }
        //if event exists then all the subsequent code will executed
        const newBooking = new Booking({
          _id: new mongoose.Types.ObjectId(),
          quantity: req.body.quantity,
          event: req.body.eventId,
        });
        return newBooking.save();
      })
      //we then execute all other steps for creating a booking
      .then((result) => {
        console.log(result);
        res.status(201).json({
          message: "Booking was created",
          createdBooking: {
            _id: result._id,
            event: result.event,
            quantity: result.quantity,
          }
        });
      })
      // if we want to create a booking for a event that does not exists then we execute the below code
      .catch((err) => {
        console.log(err);
        if (!res.headersSent) {
          // Check if headers have been sent before sending an error response
          res.status(500).json({
            error: err,
          });
        }
      });
  };