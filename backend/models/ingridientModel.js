const mongoose = require('mongoose')

const measurementSchema = mongoose.Schema({
    measurementQuantity: {
        type: Number,
        required: [true, 'Please add the a measurement quantity.']
    },
    measurementType: {
        type: String,
        required: [true, 'Please select the a measurement type.']
    },
})

const ingridientSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add an ingridient name.']
    },
    measurements: measurementSchema,
    alternativeIngridient: {
        type: [String],
    }
})

module.exports = mongoose.model('Ingridient', ingridientSchema)