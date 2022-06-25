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
})

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
    // ingridients: {
    //     type: [mongoose.Schema.Types.ObjectId],
    //     required: [true, 'Please select ingridients'],
    //     ref: 'Ingrident'
    // },
    steps: {
        type: [String],
        required: [true, 'Please add a step by step instructions']
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