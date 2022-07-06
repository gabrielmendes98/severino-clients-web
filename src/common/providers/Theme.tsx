import { Global, ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { ToastContainer } from 'react-toastify';
import { CssBaseline } from '@mui/material';
import { ReactNode, useEffect, useMemo, useState } from 'react';
import '@fontsource/ubuntu';
import 'react-toastify/dist/ReactToastify.css';
import { InferGetServerSidePropsType } from 'next';
import lightTheme from 'common/styles/theme/lightTheme';
import globalStyles from 'common/styles/global';
import { useSelector } from 'common/store/hooks';
import { selectIsDarkTheme } from 'common/slices/theme';
import darkTheme from 'common/styles/theme/darkTheme';

interface Props {
  children: ReactNode;
}

const ThemeProvider = ({ children }: Props) => {
  const isDarkTheme = useSelector(selectIsDarkTheme);
  const [theme, setTheme] = useState(lightTheme);

  useEffect(() => {
    setTheme(isDarkTheme ? darkTheme : lightTheme);
  }, [isDarkTheme]);

  return (
    <MuiThemeProvider theme={theme}>
      <EmotionThemeProvider theme={theme}>
        <Global styles={globalStyles} />
        <CssBaseline />
        <ToastContainer />
        {children}
      </EmotionThemeProvider>
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
