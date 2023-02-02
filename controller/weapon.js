const schema = require('../schema/weapon')

// fetch all
const getAll = async (req, res) => {
    // #swagger.tags = ['Weapon']
    // #swagger.description = 'Displays all weapons.'
    try {
        const weapon = await schema.find()
        res.status(200).json(weapon)
    } catch (e) {
        return res.status(500).json({ message: e.message })
    }
}

module.exports = { getAll }