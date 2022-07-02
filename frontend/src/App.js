import Navbar from './components/Navbar'
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard'
// import StickyFooter from './components/StickyFooter'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Container>
        {/* <Login /> */}
        {/* <Register /> */}
        <Dashboard />
      </Container>
    </ThemeProvider>
    
  );
}

export default App;
