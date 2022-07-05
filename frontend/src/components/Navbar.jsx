import * as React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {logout, reset} from '../features/auth/authSlice'
import {Link, useNavigate} from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {user} = useSelector((state) => state.auth)

  const handleLogout = () => {
    dispatch(logout())
    dispatch(reset)
    navigate('/')
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to='/'>
              Grocery App
            </Link>
          </Typography>
          {user ? 
          (<Link to='/login'>
            <Button color="inherit" onClick={handleLogout}>Logout</Button>
          </Link>) 
          : 
          (
            <>
              <Link to='/login'>
                <Button color="inherit">Login</Button>
              </Link>
              <Link to='/register'>
                <Button color="inherit">Register</Button>
              </Link>
            </>
            
          )}
          

        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar
