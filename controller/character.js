const Schema = require('../schema/character')


// fetch all
const getAll = async (req, res) => {
    const character = await Schema.find()
    // const character = false

    if (!character) {
        throw new Error('Something went wrong')
    }

    res.status(200).json(character)
}

// fetch by id
const getOne = async (req, res) => {
    const character = await Schema.findById(req.params.id)

    if (!character) {
        throw new Error('ID not found')
    }

    res.status(200).json(character)
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

    const createdCharacter = await contact.save()

    res.status(201).json(createdCharacter._id)

}


// update
const updateOne = async (req, res) => {

    const characterUpdated = await Schema.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true, runValidators: true })

    res.json(characterUpdated)

    res.status(204)

}

// delete
const delOne = async (req, res) => {

    const removedCharacter = await Schema.deleteOne({ _id: req.params.id })
    res.status(200).json(removedCharacter)

}



module.exports = { getOne, getAll, addOne, delOne, updateOne }