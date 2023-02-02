const express = require('express')

const router = express.Router()
const characterController = require('../controller/character')

router.use('/', characterController.getAll)
router.use('/character', require('./character'))
router.use('/weapon', require('./weapon'))

module.exports = router