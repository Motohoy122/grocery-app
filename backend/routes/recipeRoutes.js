const express = require('express')
const { setgroups } = require('process')
const router = express.Router()
const { getRecipes, createRecipes, updateRecipes, deleteRecipes } = require('../controllers/recipesController')

router.route('/').get(getRecipes).post(createRecipes)
router.route('/:id').put(updateRecipes).delete(deleteRecipes)

module.exports = router