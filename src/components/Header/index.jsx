import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Logo from 'components/Logo';

const Header = () => (
  <AppBar position="static" color="white" variant="outlined">
    <Toolbar>
      <Logo />
      <Button color="inherit">Login</Button>
    </Toolbar>
  </AppBar>
);

export default Header;
