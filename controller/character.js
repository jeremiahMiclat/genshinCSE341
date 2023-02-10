const Schema = require('../schema/character')

// fetch all
const getAll = async (req, res) => {
    // #swagger.tags = ['Character']
    // #swagger.description = 'Displays all characters.'
    try {
        /* #swagger.responses[200] = { 
            description: 'Returns all characters information in a collection from mongodb genshin database',
            schema: { $ref: "#/definitions/Character collection" }
       } */
        const character = await Schema.find()
        res.status(200).json(character)
    } catch (e) {
        return res.status(500).json({ message: e.message })
    }
}

// fetch by id
const getOne = async (req, res) => {
    // #swagger.tags = ['Character']
    // #swagger.description = 'Fetching a character document through _id from mongodb collection.'
    // #swagger.parameters['id'] = { description: 'ID of character.' }
    try {
        const character = await Schema.findById(req.params.id)
        res.status(200).json(character)
        /* #swagger.responses[200] = { 
              schema: { $ref: "#/definitions/Character document" },
              description: 'Character data fetched from collection in db.' 
       } */
    } catch (e) {
        return res.status(500).json({ message: e.message })
    }
}


// create one
const addOne = async (req, res) => {
    // #swagger.tags = ['Character']
    // #swagger.description = 'Create a new character document in the collection.'
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
    /* #swagger.parameters['character'] = {
               in: 'body',
               description: 'Information of a character to be created. All fields are required',
               required: true,
               schema: { $ref: "#/definitions/Character document creation" }
        } */

    try {
        const createdCharacter = await contact.save()
        res.status(201).json(createdCharacter._id)
        /* #swagger.responses[201] = { 
            description: 'Returns character "_id" autogenerated by mongodb',
            schema: "63dd79bed4238c841b2794ee"
       } */

    } catch (e) {
        res.status(500).json({ message: e.message })
    }
}


// update
const updateOne = async (req, res) => {
    // #swagger.tags = ['Character']
    // #swagger.description = 'Updating a character information.'
    // #swagger.parameters['id'] = { description: 'ID of character to be updated.' }
    const character = new Schema({
        _id: req.params.id,
        name: req.body.name,
        nation: req.body.nation,
        element: req.body.element,
        weaponType: req.body.weaponType,
        rarity: req.body.rarity,
        estimatedAge: req.body.estimatedAge,
        bonusStat: req.body.bonusStat,
        modelType: req.body.modelType,
    })
    /* #swagger.parameters['character'] = {
               in: 'body',
               description: 'Information of a character being updated. All fields are required. Rarity must be 4star or 5star',
               required: true,
               schema: { $ref: "#/definitions/Character document creation" }
        } */
    try {
        const characterUpdated = await Schema.findOneAndUpdate(req.params.id, { $set: character }, { new: true, runValidators: true })
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