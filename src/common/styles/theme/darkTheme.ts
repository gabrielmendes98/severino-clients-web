import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#7D3CFF',
    },
    secondary: {
      main: '#3700B3',
    },
    error: {
      main: red.A400,
    },
    bw: {
      main: '#000',
      contrastText: '#FFF',
    },
    background: {
      default: '#121212',
      paper: '#121212',
    },
  },
  typography: {
    fontFamily: "'Ubuntu', Helvetica, Arial",
  },
});

export default darkTheme;
