import {useState} from 'react'
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
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
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

export const RecipeForm = () => {
    const [ingridientList, setIngridientList] = useState([{ingridient: '', quantity: '', measurement:''}])

    const handleIngridientAdd = () => {
        setIngridientList([...ingridientList, {ingridient: '', quantity: '', measurement:''}])
    }

    const handleIngridientRemove = (index) => {
        const ingridients = [...ingridientList]
        ingridients.splice(index, 1)
        setIngridientList(ingridients)
    }

    const handleIngridientChange = (e, index) => {
        const { name, value } = e.target
        const ingridients = [...ingridientList]
        ingridients[index][name] = value
        setIngridientList(ingridients)
    }

    return (
        <Box 
            sx={{
                width: '100%',
                textAlign: 'center'
            }}
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
                                name="ingridient"
                                value={ingridient.ingridient}
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
                                name="quantity"
                                type="number"
                                value={ingridient.quantity}
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
                                name="measurement"
                                value={ingridient.measurement}
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
                    <Grid item xs={12}>
                            <ul>
                                {ingridientList.map(ingridient => (
                                    <li>
                                        {ingridient.ingridient} - {ingridient.quantity} {ingridient.measurement}
                                    </li>
                                    
                                ))}
                            </ul>
                            
                        </Grid>
                </Grid>
                <Grid container spacing={1}
                sx={{width: '100%',}}
            >
                <Grid item xs={12}>
                    <TextField
                        margin="normal"
                        fullWidth
                        label="Instructions"
                        name="steps"
                        autoFocus    
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Equipment"
                        name="Tools"
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
                        autoFocus
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        margin="normal"
                        fullWidth
                        label="Calories"
                        name="calories"
                        autoFocus
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        margin="normal"
                        fullWidth
                        label="Carbs"
                        name="carbs"
                        autoFocus
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        margin="normal"
                        fullWidth
                        label="Fats"
                        name="fats"
                        autoFocus
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        margin="normal"
                        fullWidth
                        label="Protein"
                        name="Protein"
                        autoFocus
                    />
                </Grid>
            </Grid>
        </Box>
    )
}

export const Recipe = () => {
    return (
        <Box sx={{ 
            width: '100%',
            mt: 1,
        }}>
        <Stack spacing={2}
            sx={{width: '100%',}}
        >
        <Item>
            <Accordion sx={{width: '100%', boxShadow: 'none'}}>
                <AccordionSummary>   
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            width: '100%',
                        }}
                    >
                        
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                        />
                        <Typography
                            sx={{
                                fontWeight: 600,
                                fontSize: 20,
                                letterSpacing: .64,
                                marginLeft: 1,
                            }}
                        >
                            Recipe 1
                        </Typography>
                    </Box>
                    <Box>
                        <CounterBox>
                            <IconButton>
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
                                1
                            </CounterValue>
                            <IconButton>
                                <AddIcon />
                            </IconButton>
                        </CounterBox>
                    </Box>
                </AccordionSummary>
                <AccordionDetails>
                    TEST
                </AccordionDetails>
            </Accordion>
        </Item>
        </Stack>
        </Box>
    )
}

const RecipeList = () => {
    return (
        <RecipeForm />
        // <Container maxWidth="xs" sx={{mb: 4, mt:0}}>      
        //     <Box
        //         sx={{
        //         marginTop: 8,
        //         display: 'flex',
        //         flexDirection: 'column',
        //         alignItems: 'center',
        //         }}
        //     >
        //         <Box sx={{textAlign: 'right', width: '100%'}}>
        //             <IconButton color="primary" aria-label="add a recipe" component="span" >
        //                 <AddCircleIcon />
        //             </IconButton>
        //         </Box>
        //         <Accordion
        //             sx={{
        //                 width: '100%'
        //             }}
        //         >
        //             <AccordionSummary
        //                 expandIcon={<ExpandMoreIcon />}
        //                 aria-controls="panel1a-content"
        //                 id="panel1a-header"
                        
        //             >
        //                 <Box 
        //                     sx={{
        //                         width: '100%',
        //                         display: 'flex',
        //                         justifyContent: 'space-between'
        //                     }}
        //                 >
        //                     <Typography component="h1" variant="h5">
        //                             Recipes
        //                     </Typography>
                            
        //                 </Box>
        //             </AccordionSummary>   
        //             <AccordionDetails>
        //                 <Recipe />
        //             </AccordionDetails>  
        //         </Accordion> 
        //     </Box> 
        // </Container>
    )
}

export default RecipeList
