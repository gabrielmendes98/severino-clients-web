import { Global } from '@emotion/react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { ReactNode } from 'react';
import theme from 'common/styles/theme';
import globalStyles from 'common/styles/global';
import '@fontsource/ubuntu';

interface Props {
  children: ReactNode;
}

const ThemeProvider = ({ children }: Props) => (
  <MuiThemeProvider theme={theme}>
    <Global styles={globalStyles} />
    <CssBaseline />
    {children}
  </MuiThemeProvider>
);

export default ThemeProvider;
