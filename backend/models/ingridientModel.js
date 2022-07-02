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
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    name: {
        type: String,
        required: [true, 'Please add an ingridient name.']
    },
    alternativeIngridients: {
        type: [String],
    },
    measurement: measurementSchema,
},{timestamps: true})

module.exports = mongoose.model('Ingridient', ingridientSchema)