import { Global, ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { ToastContainer } from 'react-toastify';
import { CssBaseline } from '@mui/material';
import { ReactNode } from 'react';
import '@fontsource/ubuntu';
import 'react-toastify/dist/ReactToastify.css';
import theme from 'common/styles/theme';
import globalStyles from 'common/styles/global';

interface Props {
  children: ReactNode;
}

const ThemeProvider = ({ children }: Props) => (
  <MuiThemeProvider theme={theme}>
    <EmotionThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <CssBaseline />
      <ToastContainer />
      {children}
    </EmotionThemeProvider>
  </MuiThemeProvider>
);

export default ThemeProvider;
