const asyncHandler = require('express-async-handler')
const Ingridient = require('../models/ingridientModel')
const User = require('../models/userModel')

// @desc create an ingridient
// @route POST /api/ingridients
// @access Private
const createIngridient = asyncHandler(async (req, res) => {
    if(!req.body.name) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    const ingridient = await Ingridient.create({
        user: req.user.id,
        name: req.body.name,
        alternativeIngridients: req.body.alternativeIngridients,
        measurement: req.body.measurement,
    })

    // console.log(req.user.id)
    res.status(200).json(ingridient)
})

// @desc Get ingridients
// @route GET /api/ingridients
// @access Private
const getIngridients = asyncHandler(async (req, res) => {
    const ingridients = await Ingridient.find()
    res.status(200).json(ingridients)

})

// @desc Update an ingridient
// @route PUT /api/ingridients/:id
// @access Private
const updateIngridient = asyncHandler(async (req, res) => {
    const ingridient = await Ingridient.findById(req.params.id)
    if(!ingridient) {
        res.status(400)
        throw new Error('ingridient not found')
    }
    const user = await User.findById(req.user.id)

    if(!user) {
        res.status(401)
        throw new Error('User not found')
    }

    // Make sure the logged in user matches the
    // ingridient user
    if(ingridient.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    const updatedIngridient = await Ingridient.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json(updatedIngridient)
})

// @desc DELETE an ingridient
// @route DELETE /api/ingridients/:id
// @access Private
const deleteIngridient = asyncHandler(async (req, res) => {
    const ingridient = await Ingridient.findById(req.params.id)
    if(!ingridient) {
        res.status(400)
        throw new Error('Ingridient not found')
    }

    const user = await User.findById(req.user.id)

    if(!user) {
        res.status(401)
        throw new Error('User not found')
    }
    // console.log(ingridient)
    // Make sure the logged in user matches the
    // ingridient user
    if(ingridient.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    await ingridient.deleteOne()

    res.status(200).json({id: req.params.id})
})

module.exports = {
    createIngridient,
    getIngridients,
    updateIngridient,
    deleteIngridient
}