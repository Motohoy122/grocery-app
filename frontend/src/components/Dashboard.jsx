import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import RecipeForm from './RecipeForm'
import IngridientList from './IngridientList'
import RecipeList from './RecipeList'
import {displayAddRecipe} from '../features/recipes/recipeSlice'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Dashboard = () => {
    
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {user} = useSelector((state) => state.auth)
    const {addRecipe} = useSelector((state) => state.recipes)

    useEffect(()=> {
        if(!user) {
            navigate('/login')
        }

    }, [user, navigate])

    // const [addRecipe, setAddRecipe] = useState(false)

    return (
        <Container>
            {/* {console.log('addRecipe value ', addRecipe)} */}
            {addRecipe === true ? 
                // <RecipeForm 
                <RecipeForm />
            :
            <>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <IngridientList />
                    </Grid>
                    <Grid item xs={12}>
                        <Box sx={{textAlign: 'right', width: '100%', alignItems: 'end'}}>
                            <IconButton color="primary" aria-label="add a recipe" component="span" onClick={() => dispatch(displayAddRecipe(true))}>
                                <AddCircleIcon />
                            </IconButton>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <RecipeList sx={{ width: '100%'}}/>
                    </Grid>
                </Grid>
            </>
            }
            
        </Container>
    )
}

export default Dashboard
