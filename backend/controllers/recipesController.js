const asyncHandler = require('express-async-handler')
// @desc Get recipes
// @route GET /api/recipes
// @access Private
const getRecipes = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'get recipes'})
})

// @desc create a recipe
// @route POST /api/recipes
// @access Private
const createRecipes = asyncHandler(async (req, res) => {
    // console.log(req.body)
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({message: 'Set recipes'})
})

// @desc Update a recipe
// @route PUT /api/recipes
// @access Private
const updateRecipes = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Update recipes ${req.params.id}`})
})

// @desc DELETE a recipe
// @route DELETE /api/recipes/:id
// @access Private
const deleteRecipes = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Delete recipes ${req.params.id}`})
})

module.exports = {
    getRecipes,
    createRecipes,
    updateRecipes,
    deleteRecipes
}