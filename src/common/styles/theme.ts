import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

declare module '@mui/material/styles' {
  interface Palette {
    white: Palette['primary'];
  }
  interface PaletteOptions {
    white: PaletteOptions['primary'];
  }
}

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
    },
    background: {
      default: '#F0F0F0',
    },
  },
});

export default theme;
