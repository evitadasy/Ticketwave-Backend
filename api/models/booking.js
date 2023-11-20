const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    event: {type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true},
    quantity: {type: Number, default: 1}
});


// // Set versionKey to false to exclude the __v field
// bookingSchema.set('versionKey', false);

module.exports = mongoose.model('Booking', bookingSchema)

