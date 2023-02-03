const express = require('express')

const router = express.Router()
const controller = require('../controller/character')

// get all characters
router.get('/', controller.getAll)
// add one
router.post('/', controller.addOne)
// delete one
router.delete('/:id', controller.delOne)

module.exports = router