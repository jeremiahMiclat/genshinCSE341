const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    nation: {
        type: String,
        required: true
    },
    element: {
        type: String,
        required: true
    },
    weaponType: {
        type: String,
        required: true
    },
    rarity: {
        type: String,
        enum: ['4star, 5star'],
        required: true
    },
    estimatedAge: {
        type: String,
        required: true
    },
    bonusStat: {
        type: String,
        required: true
    },
    modelType: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('character', schema, 'character')