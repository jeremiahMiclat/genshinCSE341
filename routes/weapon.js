const express = require('express')

const router = express.Router()
const controller = require('../controller/weapon')

// get all weapons
router.get('/', controller.getAll)

module.exports = router