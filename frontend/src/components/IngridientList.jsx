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

export const Ingridient = ({name, recipeQuantity, ingridientQuantity, measureType}) => {
    const [recipe, setRecipe] = useState()
    const {singleRecipe} = useSelector((state) => state.recipes)
    
    const dispatch = useDispatch()
    useEffect(() => {
        // dispatch(getRecipe(id))
        // console.log('Single Recipe ingridients ', ingridients)
        
        // console.log(recipe)
    },[])
    
    return (
        <Item>
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
            <Typography
                sx={{
                    fontWeight: 700,
                    fontSize: '34px',
                    textAlign: 'right',
                }}
            >
                {ingridientQuantity * recipeQuantity}
                <Typography
                    component="span"
                    sx={{
                        opacity: '.8',
                        fontWeight: '600',
                        fontSize: '13px',
                        ml: '3px',
                    }}
                >
                    {measureType}
                </Typography>
            </Typography>
        </Item>
    )
}

const IngridientList = () => {
    
    const {selectedRecipes, isLoading, isError, message} = useSelector((state) => state.recipes)
    
                // {/* {console.log('selectedRecipes array list',selectedRecipes)} */}

    return (
        <Container maxWidth="xs">  
        
         
        
            <Box
                sx={{
                marginTop: 8,
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
                                            return(<Ingridient name={ingridient.name} recipeQuantity={recipe.quantity} ingridientQuantity={ingridient.measurementQuantity} measureType={ingridient.measurementType}/>)}
                                        )
                                    }
                                })
                            :
                                <Item>failed</Item>
                            }
                            
                            
                        </Stack>
                    </Box>
                </AccordionDetails>  
                </Accordion> 
            </Box> 
        </Container>
    )
}

export default IngridientList
