const express = require('express')
const { requiresAuth } = require('express-openid-connect')

const router = express.Router()

// req.isAuthenticated is provided from the auth router
router.get('/', (req, res) => {
    res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
})

router.get('/profile', requiresAuth, (req, res) => {
    res.send(`hello ${req.oidc.user.name}`)
})

module.exports = router