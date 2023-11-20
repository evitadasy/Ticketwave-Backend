const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: { type: String, required: true },
    price: { type: Number, required: true },
    type: { type: String, required: true },
    description: { type: String, required: true },
    city: { type: String, required: true },
    date: { type: Date, required: true },
    img: { type: String, required: true },
    location: { type: String, required: true }
});

// // Set versionKey to false to exclude the __v field
// eventSchema.set('versionKey', false);

module.exports = mongoose.model('Event', eventSchema)

