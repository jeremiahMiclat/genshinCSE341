const schema = require('../schema/weapon')

// fetch all
const getAll = async (req, res) => {
    const weapon = await schema.find()
    res.status(200).json(weapon)
}

// update
const updateOne = async (req, res) => {

    const updatedWeapon = await schema.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true, runValidators: true })

    res.status(204).json(updatedWeapon)


}

module.exports = { getAll, updateOne }