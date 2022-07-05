import {useState} from 'react'
import { useDispatch} from 'react-redux'
import {createRecipe} from '../features/recipes/recipeSlice'
import {displayAddRecipe} from '../features/recipes/recipeSlice'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const RecipeForm = () => {
    const [ingridientList, setIngridientList] = useState([{name: '', measurementQuantity: '', measurementType:''}])
    const [instructionList, setInstructionList] = useState([''])

    const [recipe, setRecipe] = useState({
        name: '',
        timeDuration: 0,
        category: [],
        ingridients: [],
        steps: [],
        tools: [],
        nutrition: {
            carbs: 0,
            protein: 0,
            fat: 0,
            calories: 0
        },
        numOfServings: 0,
    })

    const {name, timeDuration, category, ingridients, steps, tools, nutrition, numOfServings} = recipe

    const dispatch = useDispatch()

    // Ingridient state management functions
    const handleIngridientAdd = () => {
        setIngridientList([...ingridientList, {name: '', measurementQuantity: '', measurementType:''}])
    }

    const handleIngridientRemove = (index) => {
        const ingridients = [...ingridientList]
        ingridients.splice(index, 1)
        setIngridientList(ingridients)
        setRecipe((prevState) => ({
            ...prevState,
            'ingridients': ingridients
        }))
    }

    const handleIngridientChange = (e, index) => {
        const { name, value } = e.target
        const ingridients = [...ingridientList]
        ingridients[index][name] = value
        setIngridientList(ingridients)
        setRecipe((prevState) => ({
            ...prevState,
            'ingridients': ingridients
        }))
    }

    // Instruction state management functions
    const handleInstructionAdd = () => {
        setInstructionList([...instructionList, ''])
    }

    const handleInstructionRemove = (index) => {
        const instructions = [...instructionList]
        instructions.splice(index, 1)
        setInstructionList(instructions)
        setRecipe((prevState) => ({
            ...prevState,
            'steps': instructions
        }))
    }

    const handleInstructionChange = (e, index) => {
        const { name, value } = e.target
        const instructions = [...instructionList]
        instructions[index] = value
        setInstructionList(instructions)
        setRecipe((prevState) => ({
            ...prevState,
            'steps': instructions
        }))
    }

    // Form Field onChange hanlder
    const handleChange = (e) => {
        const {name, value} = e.target

        // Handling onChange for arrays
        if(name === 'category' || name === 'tools') {
            setRecipe((prevState) => ({
                ...prevState,
                [name]: [value]
            }))
        } 
        // Handle embedded object
        else if(name === 'calories' || name === 'carbs' || name === 'protein' || name === 'fat') {
            let nutritionState = {...nutrition}
            nutritionState[name] = parseInt(value)
            setRecipe((prevState) => ({
                ...prevState,
                'nutrition': nutritionState
            }))
        }
        else if (name === 'numOfServings') {
            setRecipe((prevState) => ({
                ...prevState,
                [name]: parseInt(value)
            }))
        }
        // Normal onChange textfield
        else {
            setRecipe((prevState) => ({
                ...prevState,
                [name]: value
            }))
        }
        
    }

    // Form Submission
    const handleSubmit = e => {
        e.preventDefault()

        dispatch(createRecipe(recipe))
        setIngridientList([{name: '', measurementQuantity: '', measurementType:''}])
        setInstructionList([''])
        setRecipe({
            name: '',
            timeDuration: 0,
            category: [],
            ingridients: [],
            steps: [],
            tools: [],
            nutrition: {
                carbs: 0,
                protein: 0,
                fat: 0,
                calories: 0
            },
            numOfServings: 0,
        })
    }

    console.log('Recipe State:', recipe)
    return (
        <Box 
            sx={{
                width: '100%',
                textAlign: 'center'
            }}
            onSubmit={handleSubmit}
        >
            <Typography 
                sx={{width: '100%', textAlign: 'center'}}
                component="h1" 
                variant="h5"
            >Create a Recipe </Typography>
            <Grid container spacing={1}
                sx={{width: '100%',}}
            >
                <Grid item xs={12}>
                    <TextField
                        margin="normal"
                        fullWidth
                        required
                        label="Name"
                        name="name"
                        value={name}
                        onChange={(e)=>handleChange(e)}
                        autoFocus
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Time Duration"
                        name="timeDuration"
                        autoFocus
                        type="number"
                        value={timeDuration}
                        onChange={(e)=>handleChange(e)}
                        InputProps={{
                            endAdornment: <InputAdornment position="end">min</InputAdornment>
                        }}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Category"
                        name="category"
                        value={category}
                        onChange={(e)=>handleChange(e)}
                        autoFocus
                    />
                </Grid>
            </Grid>
            
                {ingridientList.map((ingridient, index) =>(
                    <Grid container spacing={1}
                        sx={{width: '100%', }}
                        key={index}
                    >
                        <Grid item xs={6}>
                            <TextField
                                margin="normal"
                                fullWidth
                                required
                                label="Ingridients"
                                name="name"
                                value={ingridient.name}
                                onChange={e => handleIngridientChange(e, index)}
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <TextField
                                margin="normal"
                                fullWidth
                                required
                                label="Quantity"
                                name="measurementQuantity"
                                type="number"
                                value={ingridient.measurementQuantity}
                                onChange={e => handleIngridientChange(e, index)}
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                margin="normal"
                                fullWidth
                                required
                                label="Measurement Type"
                                name="measurementType"
                                value={ingridient.measurementType}
                                onChange={e => handleIngridientChange(e, index)}
                                autoFocus
                            />
                        </Grid>
                        { index === ingridientList.length-1 ?
                        <Grid item xs={1}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                textAlign: 'left'
                            }}
                        >
                            <IconButton onClick={handleIngridientAdd} >
                                <AddCircleIcon color='primary' sx={{fontSize: 30}}/>
                            </IconButton>
                        </Grid> 
                        :
                        <Grid item xs={1}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                textAlign: 'left'
                            }}
                        >
                            <IconButton onClick={() => handleIngridientRemove(index)} >
                                <RemoveCircleIcon color='primary' sx={{fontSize: 30}}/>
                            </IconButton>
                        </Grid>
                        }   
                        
                    </Grid>
                ))
                }
                <Grid container>
                    <Grid item xs={12}
                        sx={{textAlign: 'left'}}
                    >
                        <ul>
                            {ingridientList.map(ingridient => (
                                <li>
                                    {ingridient.name} - {ingridient.measurementQuantity} {ingridient.measurementType}
                                </li>
                                
                            ))}
                        </ul>
                        
                    </Grid>
                </Grid>
                
                {
                    instructionList.map((instruction, index) =>(
                        <Grid container spacing={1}
                            sx={{width: '100%',}}
                        >
                            {/* <Grid item xs={1}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <Typography>
                                    {index + 1})
                                </Typography>
                            </Grid> */}
                            <Grid item xs={11}>
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    label={`Step ${index+1}`}
                                    name="steps"
                                    onChange={e => handleInstructionChange(e, index)}
                                    value={instruction}
                                    autoFocus    
                                />
                            </Grid>
                            { index === instructionList.length-1 ?
                                <Grid item xs={1}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        textAlign: 'left'
                                    }}
                                >
                                    <IconButton onClick={handleInstructionAdd} >
                                        <AddCircleIcon color='primary' sx={{fontSize: 30}}/>
                                    </IconButton>
                                </Grid> 
                                :
                                <Grid item xs={1}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        textAlign: 'left'
                                    }}
                                >
                                    <IconButton onClick={() => handleInstructionRemove(index)} >
                                        <RemoveCircleIcon color='primary' sx={{fontSize: 30}}/>
                                    </IconButton>
                                </Grid>
                                }  
                        </Grid>
                    ))
                }
                <Grid container spacing={1}
                    sx={{width: '100%',}}
                >
                <Grid item xs={6}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Equipment"
                        name="tools"
                        value={tools}
                        onChange={(e)=>handleChange(e)}
                        autoFocus
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Number of Servings"
                        name="numOfServings"
                        type="number"
                        value={numOfServings}
                        onChange={(e)=>handleChange(e)}
                        autoFocus
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        margin="normal"
                        fullWidth
                        label="Calories"
                        name="calories"
                        type="number"
                        value={nutrition.calories}
                        onChange={(e)=>handleChange(e)}
                        autoFocus
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        margin="normal"
                        fullWidth
                        label="Carbs"
                        name="carbs"
                        type="number"
                        value={nutrition.carbs}
                        onChange={(e)=>handleChange(e)}
                        autoFocus
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        margin="normal"
                        fullWidth
                        label="Fats"
                        name="fat"
                        type="number"
                        value={nutrition.fat}
                        onChange={(e)=>handleChange(e)}
                        autoFocus
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        margin="normal"
                        fullWidth
                        label="Protein"
                        name="protein"
                        type="number"
                        value={nutrition.protein}
                        onChange={(e)=>handleChange(e)}
                        autoFocus
                    />
                </Grid>
                <Grid item xs={6}>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        onClick={handleSubmit}
                    >
                    Submit
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Button
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        onClick={() => dispatch(displayAddRecipe(false))}
                    >
                    Cancel
                    </Button>
                </Grid>
            </Grid>
        </Box>
    )
}

export default RecipeForm