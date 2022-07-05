const asyncHandler = require('express-async-handler')
const { globalAgent } = require('http')
const { create } = require('../models/recipeModel')

const Recipe = require('../models/recipeModel')
const User = require('../models/userModel')
// const Ingridient = require('../models/ingridientModel')


// @desc Get recipes
// @route GET /api/recipes
// @access Private
const getRecipes = asyncHandler(async (req, res) => {
    const recipes = await Recipe.find({ user: req.user.id })
    // const ingridient = await Ingridient.find({_id: recipes[2].ingridients[1]})
    // console.log(ingridient)
    res.status(200).json(recipes)
})

// @desc create a recipe
// @route POST /api/recipes
// @access Private
const createRecipes = asyncHandler(async (req, res) => {
    // console.log(req.body) 
    if(!req.body.name || !req.body.timeDuration || !req.body.category || !req.body.steps || !req.body.tools || !req.body.numOfServings) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    const recipe = await Recipe.create({
        user: req.user.id,
        name: req.body.name,
        timeDuration: req.body.timeDuration,
        category: req.body.category,
        steps: req.body.steps,
        tools: req.body.tools,
        ingridients: req.body.ingridients,
        nutrition: req.body.nutrition,
        numOfServings: req.body.numOfServings
    })
    // console.log(req.user.id)
    res.status(200).json(recipe)
})

// @desc Update a recipe
// @route PUT /api/recipes
// @access Private
const updateRecipes = asyncHandler(async (req, res) => {
    const recipe = await Recipe.findById(req.params.id)
    if(!recipe) {
        res.status(400)
        throw new Error('Recipe not found')
    }

    if(!req.user) {
        res.status(401)
        throw new Error('User not found')
    }

    // Make sure the logged in user matches the
    // recipe user
    if(recipe.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json(updatedRecipe)
})

// @desc DELETE a recipe
// @route DELETE /api/recipes/:id
// @access Private
const deleteRecipes = asyncHandler(async (req, res) => {
    const recipe = await Recipe.findById(req.params.id)
    if(!recipe) {
        res.status(400)
        throw new Error('Recipe not found')
    }

    if(!req.user) {
        res.status(401)
        throw new Error('User not found')
    }
    // console.log(recipe)
    // Make sure the logged in user matches the
    // recipe user
    if(recipe.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    await recipe.deleteOne()

    res.status(200).json({id: req.params.id})
})

module.exports = {
    getRecipes,
    createRecipes,
    updateRecipes,
    deleteRecipes
}