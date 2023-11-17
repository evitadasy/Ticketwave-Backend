const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
// const multer = require('multer');
// const upload = multer({dest:'/uploads'});

const EventsController = require('../controllers/eventsControllers');

router.get('/', EventsController.getAllEvents);
router.post('/', EventsController.createEvent);
router.get('/:eventId', EventsController.getEventById);
// // router.patch('/:eventId', EventsController.updateEvent);
// // router.delete('/:eventId', EventsController.deleteEvent);
// router.get('/:type',EventsController.getEventsByType)

module.exports = router;