import { Theme as MaterialUITheme } from '@mui/material';

declare module '@mui/material/styles' {
  interface Palette {
    white: Palette['primary'];
  }
  interface PaletteOptions {
    white: PaletteOptions['primary'];
  }
}

declare module '@emotion/react' {
  interface Theme extends MaterialUITheme {}
}

declare module '@mui/material/AppBar' {
  interface AppBarPropsColorOverrides {
    white: true;
  }
}

declare module '@mui/material/TextField' {
  interface TextFieldPropsColorOverrides {
    white: true;
  }
}

export {};
