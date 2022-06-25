const asyncHandler = require('express-async-handler')
const Ingridient = require('../models/ingridientModel')

// @desc create an ingridient
// @route POST /api/ingridients
// @access Private
const createIngridient = asyncHandler(async (req, res) => {
    res.json({
        message: 'Created Ingridient'
    })
})

// @desc Get ingridients
// @route GET /api/ingridients
// @access Private
const getIngridients = asyncHandler(async (req, res) => {
    // const recipes = await Recipe.find()
    // res.status(200).json(recipes)
    res.json({
        message: 'Get Ingridients'
    })
})

// @desc Update an ingridient
// @route PUT /api/ingridients/:id
// @access Private
const updateIngridient = asyncHandler(async (req, res) => {
    // const recipe = Recipe.findById(req.params.id)
    // if(!recipe) {
    //     res.status(400)
    //     throw new Error('Recipe not found')
    // }

    // const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, {new: true})

    // res.status(200).json(updatedRecipe)
    res.json({
        message: 'Updated Ingridient'
    })
})

// @desc DELETE an ingridient
// @route DELETE /api/ingridients/:id
// @access Private
const deleteIngridient = asyncHandler(async (req, res) => {
    // const recipe = Recipe.findById(req.params.id)
    // if(!recipe) {
    //     res.status(400)
    //     throw new Error('Recipe not found')
    // }
    // await recipe.deleteOne()

    // res.status(200).json({id: req.params.id})
    res.json({
        message: 'Deleted Ingridient'
    })
})

module.exports = {
    createIngridient,
    getIngridients,
    updateIngridient,
    deleteIngridient
}