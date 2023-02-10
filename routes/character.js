const express = require('express')

const router = express.Router()
const controller = require('../controller/character')

// get all characters
router.get('/', controller.getAll)
// get one
router.get('/:id', controller.getOne)
// add one
router.post('/', controller.addOne)
// update one
router.put('/:id', controller.updateOne)
// delete one
router.delete('/:id', controller.delOne)

module.exports = router