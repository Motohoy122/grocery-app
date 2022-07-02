import React from 'react'
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

const IngridientList = () => {
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
                            <Item>
                                <Typography
                                    sx={{
                                        fontWeight: 600,
                                        fontSize: 20,
                                        letterSpacing: .64,
                                        marginLeft: 1,
                                    }}
                                >
                                    Ingridient 1
                                </Typography>
                                <Typography
                                    sx={{
                                        fontWeight: 700,
                                        fontSize: '34px',
                                        textAlign: 'right',
                                    }}
                                >
                                    5
                                    <Typography
                                        component="span"
                                        sx={{
                                            opacity: '.8',
                                            fontWeight: '600',
                                            fontSize: '13px',
                                            ml: '3px',
                                        }}
                                    >
                                        cups
                                    </Typography>
                                </Typography>
                            </Item>
                            <Item>
                                <Typography
                                    sx={{
                                        fontWeight: 600,
                                        fontSize: 20,
                                        letterSpacing: .64,
                                        marginLeft: 1,
                                    }}
                                >
                                    Ingridient 2
                                </Typography>
                                <Typography
                                    sx={{
                                        fontWeight: 700,
                                        fontSize: '34px',
                                        textAlign: 'right',
                                    }}
                                >
                                    3
                                    <Typography
                                        component="span"
                                        sx={{
                                            opacity: '.8',
                                            fontWeight: '600',
                                            fontSize: '13px',
                                            ml: '3px',
                                        }}
                                    >
                                        cups
                                    </Typography>
                                </Typography>
                            </Item>
                        </Stack>
                    </Box>
                </AccordionDetails>  
                </Accordion> 
            </Box> 
        </Container>
    )
}

export default IngridientList
