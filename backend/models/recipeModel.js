const mongoose = require('mongoose')

const nutritionSchema = mongoose.Schema({
    carbs: {
        type: Number,
        min: 0,
        max: 5000,
    },
    protein: {
        type: Number,
        min: 0,
        max: 5000,
    },
    fat: {
        type: Number,
        min: 0,
        max: 5000,
    },
    calories: {
        type: Number,
        min: 0,
        max: 50000,
    },
})

// const measurementSchema = mongoose.Schema({
//     measurementQuantity: {
//         type: Number,
//         required: [true, 'Please add the a measurement quantity.']
//     },
//     measurementType: {
//         type: String,
//         required: [true, 'Please select the a measurement type.']
//     },
// })

const ingridientSchema = mongoose.Schema({
    // user: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: true,
    //     ref: 'User'
    // },
    name: {
        type: String,
        required: [true, 'Please add an ingridient name.']
    },
    alternativeIngridients: {
        type: [String],
    },
    measurementQuantity: {
        type: Number,
        required: [true, 'Please add the a measurement quantity.']
    },
    measurementType: {
        type: String,
        required: [true, 'Please select the a measurement type.']
    },
},{timestamps: true})

const recipeSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    name: {
        type: String,
        required: [true, 'Please add a recipe name'],
    },
    timeDuration: {
        type: Number,
        min: 0,
        max: 5000,
        required: [true, 'Please add a recipe duration in minutes']
    },
    category: {
        type: [String],
        required: [true, 'Please add a category']
    },
    ingridients: [ingridientSchema],
    steps: {
        type: [String],
    },
    tools: {
        type: [String],
        required: [true, 'Please add the necessary tools']
    },
    nutrition: nutritionSchema
    
    // [
        
            // carbs: {
            //     type: Number,
            //     min: 0,
            //     max: 5000,
            // },
            // protein: {
            //     type: Number,
            //     min: 0,
            //     max: 5000,
            // },
            // fat: {
            //     type: Number,
            //     min: 0,
            //     max: 5000,
            // },
        
    // ]
    ,
    numOfServings: {
        type: Number,
        min: 0,
        max: 2000,
        required: [true, 'Please add a number of servings']
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('Recipe', recipeSchema)