const Event = require("../models/event");
const mongoose = require("mongoose");


exports.getAllEvents = (req, res, next) => {
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

exports.getEventById =  (req, res, next) => {
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


exports.getEventsByType =  (req, res, next) => {
    Event.find({ type: req.params.eventType }).exec()
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

