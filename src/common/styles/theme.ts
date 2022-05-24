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
  },
});

export default theme;
