const mongoose = require('mongoose');
const orgSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    location: {
        type: String,
        required: true,
        trim: true
    }
}, {
        timestamps: true
    })

const Organisation = mongoose.model('Organisation', orgSchema);

module.exports = Organisation;