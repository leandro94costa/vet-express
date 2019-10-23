const mongoose = require('mongoose');

const pickUpSchema = new mongoose.Schema({
    clinic: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Clinic'
    },
    date: {
        type: Date,
        required: true
    },
    note: {
        type: String,
        trim: true
    },
    done: {
        type: Boolean,
        required: true,
        default: false
    },
    photo: {
        type: Buffer
    }
}, {
    timestamps: true
});

const pickUp = mongoose.model('PickUp', pickUpSchema);

module.exports = pickUp;