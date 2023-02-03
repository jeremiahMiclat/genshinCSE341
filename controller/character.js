const Schema = require('../schema/character')

// fetch all
const getAll = async (req, res) => {
    // #swagger.tags = ['Character']
    // #swagger.description = 'Displays all characters.'
    try {
        /* #swagger.responses[200] = { 
            description: 'Returns all characters information in a collection from mongodb genshin database',
            schema: { $ref: "#/definitions/Characters" }
       } */
        const character = await Schema.find()
        res.status(200).json(character)
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
               schema: { $ref: "#/definitions/Character" }
        } */

    try {
        const createdCharacter = await contact.save()
        res.status(201).json(createdCharacter._id)
        /* #swagger.responses[201] = { 
            description: 'Returns contact "_id" autogenerated by mongodb',
            schema: "63dd79bed4238c841b2794ee"
       } */

    } catch (e) {
        res.status(500).json({ message: e.message })
    }
}

// delete
const delOne = async (req, res) => {
    // #swagger.tags = ['Character']
    // #swagger.description = 'Deletes a character document from the collection'
    // #swagger.parameters['id'] = { description: 'ID from character document to be deleted.' }
    try {
        const removedContact = await Schema.deleteOne({ _id: req.params.id })
        res.status(200).json(removedContact)
        /* #swagger.responses[200] = { 
            schema: { $ref: "#/definitions/"Delete Responses"" },
            description: 'Delete response' 
       } */
    } catch (e) {
        return res.status(500).json({ message: e.message })
    }
}

module.exports = { getAll, addOne, delOne }