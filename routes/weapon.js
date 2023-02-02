const express = require('express')

const router = express.Router()
const weaponController = require('../controller/weapon')

// get all weapons
router.get('/', weaponController.getAll)

module.exports = router