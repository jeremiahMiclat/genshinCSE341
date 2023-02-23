const express = require('express')

const router = express.Router()
const weaponController = require('../controller/weapon')
const { tryCatch } = require("../utils/tryCatch")

// get all weapons
router.get('/',
    // #swagger.tags = ['Weapon']
    // #swagger.description = 'Displays all weapons.'
    /* #swagger.responses[200] = { 
            description: 'Returns all weapons information in a collection from mongodb genshin database',
            schema: { $ref: "#/definitions/Weapon collection" }
       } */
    weaponController.getAll)

// update one
router.put('/:id', tryCatch(
    // #swagger.tags = ['Weapon']
    // #swagger.description = 'Updating a weapon information.'
    // #swagger.parameters['id'] = { description: 'ID of weapon to be updated.' }
    /* #swagger.parameters['character'] = {
               in: 'body',
               description: 'Information of a weapon being updated. All fields are required.',
               required: true,
               schema: { $ref: "#/definitions/Weapon document creation" }
        } */
    /* #swagger.responses[204] = { 
  description: 'Returns 204 response when successful' 
  } */
    weaponController.updateOne
))

module.exports = router