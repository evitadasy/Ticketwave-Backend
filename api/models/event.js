const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: {type: String, required: true},
    price: {type: Number, required: false}
});

// // Set versionKey to false to exclude the __v field
// eventSchema.set('versionKey', false);

module.exports = mongoose.model('Event', eventSchema)

