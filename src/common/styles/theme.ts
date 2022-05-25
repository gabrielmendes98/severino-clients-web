import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#7D3CFF',
    },
    secondary: {
      main: '#3700B3',
    },
    error: {
      main: red.A400,
    },
    white: {
      main: '#FFFFFF',
      contrastText: '#000',
    },
    background: {
      default: '#F0F0F0',
    },
  },
  typography: {
    fontFamily: "'Ubuntu', Helvetica, Arial",
  },
});

export default theme;
