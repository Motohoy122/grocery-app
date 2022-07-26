import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import recipeService from './recipeService'

const initialState = {
    recipes: [],
    addRecipe: false,
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: '',
    selectedRecipes: [],
    singleRecipe: {}
}


// Create new recipe
export const createRecipe = createAsyncThunk('recipes/create', async (recipeData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await recipeService.createRecipe(recipeData, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Get user recipes
export const getRecipes = createAsyncThunk('recipes/getAll', async (_, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await recipeService.getRecipes(token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Get a recipe
export const getRecipe = createAsyncThunk('recipes/getRecipe', async (id, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await recipeService.getRecipe(id, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Delete user recipe
export const deleteRecipe = createAsyncThunk('recipes/delete', async (id, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await recipeService.deleteRecipe(id, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const recipeSlice = createSlice({
    name: 'recipe',
    initialState,
    reducers: {
        reset: (state) => initialState,
        displayAddRecipe: (state, action) => {state.addRecipe = action.payload},
        updateSelectedRecipeList: (state, action) => {
            let recipeExists = false
            state.selectedRecipes = state.selectedRecipes.map(recipe => {
                if(recipe.id === action.payload.id) {
                    recipe = action.payload
                    recipeExists = true
                    return recipe
                }
                else {
                    return recipe
                }
            })
            if(recipeExists === false) {
                state.selectedRecipes.push(action.payload)
                
            }
            recipeExists = false
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createRecipe.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createRecipe.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.recipes.push(action.payload)
            })
            .addCase(createRecipe.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload 
            })
            .addCase(getRecipes.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getRecipes.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.recipes = action.payload
            })
            .addCase(getRecipes.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getRecipe.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getRecipe.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.singleRecipe = action.payload
            })
            .addCase(getRecipe.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(deleteRecipe.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteRecipe.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.recipes = state.recipes.filter((recipe) => recipe._id !== action.payload.id)
            })
            .addCase(deleteRecipe.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            
    }
})

export const {reset, displayAddRecipe, updateSelectedRecipeList} = recipeSlice.actions
export default recipeSlice.reducer