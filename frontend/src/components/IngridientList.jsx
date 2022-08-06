import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import {getRecipe} from '../features/recipes/recipeSlice'
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
    cursor: 'pointer',
    '&:hover': { 
        transform: 'scale(1.2)',
        boxShadow: '0 9px 47px 11px #f3f3'
    },

  }));

export const Ingridient = ({name, recipeName, recipeQuantity, ingridientQuantity, measureType}) => {
    const [checkRecipe, setCheckRecipe] = useState(false)
    const {singleRecipe} = useSelector((state) => state.recipes)
    
    const dispatch = useDispatch()
    useEffect(() => {
        // dispatch(getRecipe(id))
        // console.log('Single Recipe ingridients ', ingridients)
        
        // console.log(recipe)
    },[])
    
    return (
        <Item>
            <FormControlLabel
                control={<Checkbox 
                    value="remember" 
                    color="primary" 
                    onClick={(e) => {
                        // e.stopPropagation();
                        // handleCheckbox(e)
                        setCheckRecipe(e.target.checked)
                    }}
                    
                />}
            />
            <Typography
                sx={{
                    fontWeight: 600,
                    fontSize: 20,
                    letterSpacing: .64,
                    marginLeft: 1,
                    textDecoration: checkRecipe ? 'line-through' : ''
                }}
            >
                {name}
            </Typography>
            <Typography
                sx={{
                    fontWeight: 600,
                    fontSize: 20,
                    letterSpacing: .64,
                    marginLeft: 1,
                    textDecoration: checkRecipe ? 'line-through' : ''
                }}
            >
                {ingridientQuantity * recipeQuantity} {measureType} from {recipeName}
                <Typography
                    component="span"
                    sx={{
                        opacity: '.8',
                        fontWeight: '600',
                        fontSize: '13px',
                        ml: '3px',
                    }}
                >
                    {/* {measureType} */}
                </Typography>
            </Typography>
        </Item>
    )
}

const IngridientList = () => {
    
    const {selectedRecipes, isLoading, isError, message} = useSelector((state) => state.recipes)
    
                // {/* {console.log('selectedRecipes array list',selectedRecipes)} */}

    return (
        <Container maxWidth="s">  
            <Box
                sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                ml:'auto', 
                mr:'auto',
                width: '70%'
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
                        <Typography component="h1" variant="h5">
                                Ingridients
                        </Typography>
                    </AccordionSummary>   
                    <AccordionDetails>
                        <Box sx={{ 
                            width: '100%',
                            marginTop: 1,
                        }}>
                        <Stack spacing={2}>
                            {selectedRecipes.length > 0 ? 
                                selectedRecipes.map(recipe => {
                                    // console.log(recipe)
                                    if(recipe.checked === true) {
                                        return recipe.ingridients.map( ingridient => {
                                            // console.log('Ingridient ', recipe.recipeName)
                                            return(<Ingridient name={ingridient.name} recipeName={recipe.recipeName} recipeQuantity={recipe.quantity} ingridientQuantity={ingridient.measurementQuantity} measureType={ingridient.measurementType}/>)}
                                        )
                                    }
                                })
                            :
                                <Item>failed</Item>
                            }
                            
                            
                        </Stack>
                    </Box>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        // onClick={handleSubmit}
                    >
                    Email Ingridients
                    </Button>
                </AccordionDetails>  
                </Accordion> 
            </Box> 
        </Container>
    )
}

export default IngridientList
