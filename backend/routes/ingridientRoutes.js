const express = require('express')
const router = express.Router()
const { createIngridient, getIngridients, updateIngridient, deleteIngridient } = require('../controllers/ingridientController')

router.get('/', getIngridients)
router.post('/', createIngridient)
router.put('/:id', updateIngridient)
router.delete('/:id', deleteIngridient)

module.exports = router