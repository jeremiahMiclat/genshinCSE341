const Schema = require('../schema/character')

// fetch all
const getAll = async (req, res) => {
    try {
        const character = await Schema.find()
        res.status(200).json(character)
    } catch (e) {
        return res.status(500).json({ message: e.message })
    }
}


// create one
const addOne = async (req, res) => {

    const contact = new Schema({
        name: req.body.name,
        nation: req.body.nation,
        element: req.body.element,
        weaponType: req.body.weaponType,
        rarity: req.body.rarity,
        estimatedAge: req.body.estimatedAge,
        bonusStat: req.body.bonusStat,
        modelType: req.body.modelType,
    })

    try {
        const createdCharacter = await contact.save()
        res.status(201).json(createdCharacter._id)

    } catch (e) {
        res.status(500).json({ message: e.message })
    }
}

module.exports = { getAll, addOne }