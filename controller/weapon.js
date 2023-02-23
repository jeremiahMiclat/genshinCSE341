const schema = require('../schema/weapon')

// fetch all
const getAll = async (req, res) => {
    const weapon = await schema.find()
    res.status(200).json(weapon)
}

// create one
const addOne = async (req, res) => {
    // eslint-disable-next-line new-cap
    const weapon = new schema({
        weaponType: req.body.weaponType,
        name: req.body.name,
        atkLVL90: req.body.atkLVL90,
        rarity: req.body.rarity,
        bonusStatLVL90: req.body.bonusStatLVL90

    })

    const createdWeapon = await weapon.save()

    res.status(201).json(createdWeapon._id)
}

// update
const updateOne = async (req, res) => {

    const updatedWeapon = await schema.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true, runValidators: true })

    res.status(204).json(updatedWeapon)


}

module.exports = { getAll, addOne, updateOne }