import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Logo from 'components/Logo';
import Button from 'components/Button';

const Header = () => (
  <AppBar position="static" color="white" variant="outlined">
    <Toolbar>
      <Link href="/">
        <Box sx={{ cursor: 'pointer' }}>
          <Logo />
        </Box>
      </Link>
      <Box sx={{ flexGrow: 1 }}></Box>
      <Link href="/services">
        <Button color="inherit">Contrate um serviço</Button>
      </Link>
      <Link href="/sign-up">
        <Button color="inherit">Criar conta</Button>
      </Link>
      <Link href="/login">
        <Button color="inherit">Login</Button>
      </Link>
    </Toolbar>
  </AppBar>
);

export default Header;
