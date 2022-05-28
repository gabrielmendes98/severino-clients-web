import { Theme as MaterialUITheme } from '@mui/material';

declare module '@mui/material/styles' {
  interface Palette {
    bw: Palette['primary'];
  }
  interface PaletteOptions {
    bw: PaletteOptions['primary'];
  }
}

declare module '@emotion/react' {
  interface Theme extends MaterialUITheme {}
}
declare module '@mui/material/TextField' {
  interface TextFieldPropsColorOverrides {
    bw: true;
  }
}

export {};
