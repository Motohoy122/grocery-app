const express = require('express')
const router = express.Router()
const { createIngridient, getIngridients, updateIngridient, deleteIngridient } = require('../controllers/ingridientController')
const { protect } = require('../middleware/authMiddleware')

router.get('/', getIngridients)
router.post('/', protect, createIngridient)
router.put('/:id', protect, updateIngridient)
router.delete('/:id', protect, deleteIngridient)

module.exports = router