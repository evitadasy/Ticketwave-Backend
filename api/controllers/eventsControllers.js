const Event = require("../models/event");
const mongoose = require("mongoose");


exports.getAllEvents = (req, res) => {
    Event.find() //find all elements
    .exec() 
    .then((events) => {
        res.status(200).json(events);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
};

exports.getEventById =  (req, res) => {
    Event.findById(req.params.eventId)
    .exec()
    .then((event) => {
        if (!event) {
            return res.status(404).json({
              message: "Event NOT found",
            });
        }
        res.status(200).json(event);
    })    
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });
};

exports.getEventsByTypeAndCity = (req, res) => {
    const eventType = req.params.eventType;
    const city = req.params.city;
    const query = { type: eventType };
  
    if (city && city !== '0') {
      query.city = city;
    }
  
    Event.find(query)
      .exec()
      .then((events) => {
        if (events.length > 0) {
          res.status(200).json(events);
        } else {
          res.status(404).json({
            message: 'No valid entry found for provided type and city',
          });
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ error: err });
      });
};

exports.getEventsByType =  (req, res) => {
    Event.find({ type: req.params.eventType })
    .exec()
    .then((events) => {
        if(events.length > 0){
            res.status(200).json(events);
        } else {
            res.status(404).json({
                message: 'No valid entry found for provided type'
            });
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });
};

exports.getEventsByCity =  (req, res) => {
    Event.find({ city: req.params.city })
    .exec()
    .then((events) => {
        if(events.length > 0){
            res.status(200).json(events);
        } else {
            res.status(404).json({
                message: 'No valid entry found for provided city'
            });
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });
};


