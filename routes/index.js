const express = require('express')

const router = express.Router()
const characterController = require('../controller/character')


router.use('/character', require('./character'))
router.use('/weapon', require('./weapon'))

router.get('/', characterController.getAll)

module.exports = router