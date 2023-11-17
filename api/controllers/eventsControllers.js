const Event = require("../models/event");
const mongoose = require("mongoose");

exports.getAllEvents = (req, res, next) => {
    Event.find() //find all elements
    .exec() 
    .then(docs => {
        const response = {
            count: docs.length,
            events: docs.map(doc => {
                return {
                    _id: doc._id,
                    title: doc.title,
                    price: doc.price
                    }
            })
        };
        // console.log(docs);
        res.status(200).json(response);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
};

exports.getEventById =  (req, res, next) => {
    const id = req.params.eventId;
    Event.findById(id).exec()
    .then(doc => {
        
        // console.log('From db', doc);
        if(doc){
            res.status(200).json({
                event: doc
            });
        } else {
            res.status(404).json({
                message: 'No valid entry found for provided id'
            });

        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });
};

exports.getEventsByType =  (req, res, next) => {
    //GET EVENTS BY TYPE
}

exports.createEvent =  (req, res, next) => {
    const event = new Event({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        price: req.body.price
    });
    event.save()
    .then(result => {
        // console.log(result);
        res.status(201).json({
            message: 'Handling POST requests to /events',
            createdEvent: {
                title: result.title,
                price: result.price,
                _id: result.id
            }
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
};

// exports.updateEvent = (req, res, next) => {
//     //to change data
//     const id = req.params.eventId;
//     const updateOps = {};

//     for (const ops of req.body) {
//         updateOps[ops.propName] = ops.value;
//     }
    
//     Event.updateOne({ _id: id }, { $set: updateOps })
//         .exec()
//         .then(result => {
//             console.log(result);
//             res.status(200).json({ 
//                 message: 'Event updated successfully'
//             });
//         })
//         .catch(err => {
//             console.error(err);
//             res.status(500).json({ error: err });
//         }); 
// };

// exports.deleteEvent =  (req, res, next) => {
//     const id = req.params.eventId
//      Event.deleteOne({_id: id})
//      .exec()
//      .then(result => {
//          res.status(200).json({
//              message: 'Event deleted successfully'
//             }); 
//      })
//      .catch(err => {
//          console.log(err);
//          res.status(500).json({error: err});
//      });   
//  };