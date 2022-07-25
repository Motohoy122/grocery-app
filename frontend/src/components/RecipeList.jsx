import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {createRecipe} from '../features/recipes/recipeSlice'
import {useNavigate} from 'react-router-dom'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Spinner from './Spinner'
import {getRecipes, deleteRecipe, reset} from '../features/recipes/recipeSlice'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    textAlign: 'left',
    color: theme.palette.text.secondary,
    width: '100%',
    cursor: 'pointer',
    '&:hover': { 
        transform: 'scale(1.2)',
        boxShadow: '0 9px 47px 11px #f3f3'
    },

  }));

  const CounterBox = styled(Box)(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
  }))

  const CounterValue = styled(Typography)(({theme}) => ({
    fontSize: 20,
    paddingLeft: 8,
    paddingRight: 8,
    marginTop: 1,
  }))



export const Recipe = ({id, name, timeDuration, numOfServings, nutrition, steps, tools, ingridients, category}) => {
    const dispatch = useDispatch()
    const [recipeSelected, setRecipeSelected] = useState({
        id: id,
        checked: false,
        quantity: 1
    })

    const handleCheckbox = (e) => {
        // console.log('e.target.checked ', e.target.checked)
        setRecipeSelected(prevState => {
            return {
                ...prevState,
                checked: e.target.checked
            }
        })
    }

    const handleQuantityChange = (e, mathType) => {
        setRecipeSelected(prevState => {
            if(mathType === 'add' && recipeSelected.quantity <= 100) {
                return {
                    ...prevState,
                    quantity: recipeSelected.quantity + 1
                }
            }
            else if(mathType === 'subtract' && recipeSelected.quantity > 0) {
                return {
                    ...prevState,
                    quantity: recipeSelected.quantity - 1
                } 
            }
            else {
                return {...prevState}
            }
        })
    }

    return (
        
                <Item>
                    <Accordion sx={{width: '100%', boxShadow: 'none', heigth: 'fit-content'}}>
                        <AccordionSummary>   
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    width: '100%',
                                }}
                            >
                                
                                <FormControlLabel
                                    control={<Checkbox 
                                        value="remember" 
                                        color="primary" 
                                        onChange={(e) => {
                                            
                                            handleCheckbox(e)
                                            
                                            // console.log('recipeSelected Value ', recipeSelected)
                                        }}
                                        
                                    />}
                                />
                                <Typography
                                    sx={{
                                        fontWeight: 600,
                                        fontSize: 20,
                                        letterSpacing: .64,
                                        marginLeft: 1,
                                    }}
                                >
                                    {name}
                                </Typography>
                            </Box>
                            <Box>
                                <CounterBox>
                                    <IconButton 
                                        onClick={(e) => {
                                            handleQuantityChange(e, 'subtract')
                                            console.log(recipeSelected)
                                        }}
                                    >
                                        <RemoveIcon />
                                    </IconButton>
                                    <Typography
                                        component="span"
                                        sx={{
                                            opacity: '.8',
                                            fontWeight: '600',
                                            fontSize: '13px',
                                            ml: '3px',
                                        }}
                                    ></Typography>
                                    <CounterValue>
                                        {recipeSelected.quantity}
                                    </CounterValue>
                                    <IconButton
                                        onClick={(e) => {
                                            handleQuantityChange(e, 'add')
                                            console.log(recipeSelected)
                                        }}
                                    >
                                        <AddIcon />
                                    </IconButton>
                                </CounterBox>
                            </Box>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Grid container spacing={1}>
                                <Grid item xs={6}>
                                    <Typography>
                                        Time: {timeDuration}
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography>
                                        # of Servings: {numOfServings}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography>
                                        Ingridients: 
                                        <List sx={{display: 'flex', width: '100%'}}>
                                            {
                                                ingridients.map(ingridient => (
                                                    <ListItem>
                                                        <ListItemText primary={ingridient.name} secondary={`${ingridient.measurementQuantity} ${ingridient.measurementType}`}/>
                                                    </ListItem>
                                                ))
                                            }
                                        </List>
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                <Typography sx={{display:'flex', width: '100%'}}>
                                    Tools:&nbsp; {
                                            tools.map(tool => (
                                                <Typography> {tool}, </Typography>
                                            ))
                                        }

                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography>
                                        Instructions: 
                                        <List sx={{width: '100%'}}>
                                            {
                                                steps.map((step, index) => (
                                                    <ListItem>
                                                        <ListItemText primary={`${index + 1}) ${step}`}/>
                                                    </ListItem>
                                                ))
                                            }
                                        </List>
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography>
                                        Nutrition: 
                                    </Typography>
                                    <List sx={{display:'flex', width: '100%'}}>
                                        <ListItem>
                                            <ListItemText primary={`Calories: ${nutrition.calories}`} />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText primary={`Carbs: ${nutrition.carbs}`} />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText primary={`Fat: ${nutrition.fat}`} />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText primary={`Protein: ${nutrition.protein}`} />
                                        </ListItem>
                                    </List>
                                </Grid>
                                <Grid item xs={6}>
                                    <Button onClick={()=>dispatch(deleteRecipe(id))}>
                                        Delete
                                    </Button>
                                </Grid>
                            </Grid>
                        </AccordionDetails>
                    </Accordion>
            </Item>
            
    )
}

const RecipeList = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user} = useSelector((state) => state.auth)
    const {recipes, isLoading, isError, message} = useSelector((state) => state.recipes)

    useEffect(()=> {
        if(!user) {
            navigate('/login')
        }
        dispatch(getRecipes())

        return () => {
            dispatch(reset)
        }
    }, [user, navigate, isError, message, dispatch])
    return (
        
        // <RecipeForm />
        
        <Container maxWidth="xs" sx={{mb: 4, mt:0, height: 'fit-content'}}>     
            
                <Box
                    sx={{
                    marginTop: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    }}
                >
                    
                    
                    <Accordion
                        sx={{
                            width: '100%'
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            
                        >
                            <Box 
                                sx={{
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'space-between'
                                }}
                            >
                                <Typography component="h1" variant="h5">
                                        Recipes
                                </Typography>
                                
                            </Box>
                        </AccordionSummary>   
                        <AccordionDetails>
                            {recipes.length > 0 ? 
                                <Box             
                                    sx={{ width: '100%', }}
                                >
                                    <Stack spacing={2}
                                        sx={{ width: '100%', }}
                                    >
                                    {recipes.map(recipe => (
                                        // {console.log('Recipe test', recipe)}
                                        <Recipe 
                                            key={recipe._id}
                                            id={recipe._id}
                                            name={recipe.name}
                                            timeDuration={recipe.timeDuration}
                                            numOfServings={recipe.numOfServings}
                                            nutrition={recipe.nutrition}
                                            steps={recipe.steps}
                                            tools={recipe.tools}
                                            ingridients={recipe.ingridients}
                                            category={recipe.category}
                                        />
                                    ))}
                                    </Stack>
                                </Box>
                                
                                :
                                <Typography>
                                    Add your go to recipes!
                                </Typography>
                            } 
                        </AccordionDetails>  
                    </Accordion> 
                    
                </Box> 
                
            
        </Container> 
    )
}

export default RecipeList
