const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    try {
        res.write('Lessons 5-8 Project')
    } catch (e) {
        return res.status(500).json({ message: e.message })
    }
})

router.use('/character', require('./character'))
router.use('/weapon', require('./weapon'))

module.exports = router