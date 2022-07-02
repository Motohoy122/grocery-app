import React from 'react'
import IngridientList from './IngridientList'
import RecipeList from './RecipeList'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Dashboard = () => {
    return (
        <Container>
            <IngridientList />
            <RecipeList />
        </Container>
    )
}

export default Dashboard
