const express = require('express')
const { setgroups } = require('process')
const router = express.Router()
const { getRecipes, createRecipes, updateRecipes, deleteRecipes } = require('../controllers/recipesController')
const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getRecipes).post(protect, createRecipes)
router.route('/:id').put(protect, updateRecipes).delete(protect, deleteRecipes)

module.exports = router