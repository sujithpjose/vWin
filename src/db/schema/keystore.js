const mongoose = require('mongoose');

const keystoreSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    key: {
        type: String,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        default: 'OTHERS'
    },
    notes: {
        type: String
    },
    created_at: {
        type: Date
    },
    updated_at: {
        type: Date
    }
},
    {
        timestamps: true
    }
);

const KeyStore = mongoose.model('KeyStore', keystoreSchema);

module.exports = KeyStore;