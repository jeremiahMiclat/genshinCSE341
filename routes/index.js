const express = require('express')
const { requiresAuth } = require('express-openid-connect')

const router = express.Router()



router.use('/character', requiresAuth(), require('./character'))
router.use('/weapon', requiresAuth(), require('./weapon'))


module.exports = router