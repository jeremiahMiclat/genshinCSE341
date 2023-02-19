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

    if (!createdCharacter) {
        throw Error
    }

    res.status(201).json(createdCharacter._id)

}


// update
const updateOne = async (req, res) => {
    // #swagger.tags = ['Character']
    // #swagger.description = 'Updating a character information.'
    // #swagger.parameters['id'] = { description: 'ID of character to be updated.' }
    /* #swagger.parameters['character'] = {
               in: 'body',
               description: 'Information of a character being updated. All fields are required. Rarity must be 4star or 5star',
               required: true,
               schema: { $ref: "#/definitions/Character document creation" }
        } */
    try {
        const characterUpdated = await Schema.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true, runValidators: true })
        res.status(204).json(characterUpdated)
        /* #swagger.responses[204] = { 
            schema: { $ref: "#/definitions/Character document creation" },
            description: 'Returns newly updated character information in this format' 
       } */
    } catch (e) {
        return res.status(500).json({ message: e.message })
    }
}

// delete
const delOne = async (req, res) => {
    // #swagger.tags = ['Character']
    // #swagger.description = 'Deletes a character document from the collection'
    // #swagger.parameters['id'] = { description: 'ID from character document to be deleted. Example: 63dd79bed4238c841b2794ee' }
    try {
        const removedCharacter = await Schema.deleteOne({ _id: req.params.id })
        res.status(200).json(removedCharacter)
        /* #swagger.responses[200] = { 
            schema: { $ref: "#/definitions/Delete Responses" },
            description: 'Delete response of successful deletion. Take note of "deletedCount: 1"' 
       } */
    } catch (e) {
        return res.status(500).json({ message: e.message })
    }
}



module.exports = { getOne, getAll, addOne, delOne, updateOne }