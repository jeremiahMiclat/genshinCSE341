const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    weaponType: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    atkLVL90: {
        type: String,
        required: true
    },
    rarity: {
        type: String,
        required: true
    },
    bonusStatLVL90: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('weapon', schema, 'weapon')