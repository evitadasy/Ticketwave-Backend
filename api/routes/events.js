const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const EventsController = require('../controllers/eventsControllers');

router.get('/', EventsController.getAllEvents);
router.get('/:eventId', EventsController.getEventById);
router.get('/type/:eventType/:city', EventsController.getEventsByTypeAndCity);
router.get('/type/:eventType', EventsController.getEventsByType);
router.get('/city/:city', EventsController.getEventsByCity);

module.exports = router;