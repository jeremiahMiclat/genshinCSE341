const express = require('express')

const router = express.Router()



router.use('/character', require('./character'))
router.use('/weapon', require('./weapon'))


module.exports = router