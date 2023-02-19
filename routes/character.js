const express = require('express')

const router = express.Router()
const controller = require('../controller/character')
const { tryCatch } = require("../utils/tryCatch")

// get all characters
router.get('/', tryCatch(
  // #swagger.tags = ['Character']
  // #swagger.description = 'Displays all characters.'
  /* #swagger.responses[200] = { 
            description: 'Returns all characters information in a collection from mongodb genshin database',
            schema: { $ref: "#/definitions/Character collection" }
       } */
  controller.getAll
))

// get one character
router.get('/:id', tryCatch(
  // #swagger.tags = ['Character']
  // #swagger.description = 'Fetching a character document through _id from mongodb collection.'
  // #swagger.parameters['id'] = { description: 'ID of character.' }
  /* #swagger.responses[200] = { 
       schema: { $ref: "#/definitions/Character document" },
       description: 'Character data fetched from collection in db.' 
} */
  controller.getOne))


// add one
router.post('/', controller.addOne)
// update one
router.put('/:id', controller.updateOne)
// delete one
router.delete('/:id', controller.delOne)

module.exports = router