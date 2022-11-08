const mongoose = require('mongoose')

const Schema = mongoose.Schema

const plantSchema = new Schema({
    plantName: {
        type: String,
        required: true
    },
    quickInfo: {
        type: String,
        required: false
    },
    light: {
        type: String,
        required: true
    },
    water: {
        type: String,
        required: true
    },
    repot: {
        type: String,
        required: true
    },
    feed: {
        type: String,
        required: false
    },
    nextWaterDate: {
        type: String,
        required: false
    },
    lastFeed: {
        type: String,
        required: false
    },
    lastRepot: {
        type: String,
        required: false
    }
}, { timestamps: true })

module.exports = mongoose.model('Plant', plantSchema)