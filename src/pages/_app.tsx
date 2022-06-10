import { Provider } from 'react-redux';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { wrapper } from 'common/store/store';
import ThemeProvider from 'common/providers/Theme';
import createEmotionCache from 'common/styles/createEmotionCache';
import MainLayout from 'components/Layouts/Main';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const MyApp = ({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: MyAppProps) => (
  <CacheProvider value={emotionCache}>
    <Head>
      <title>Severino</title>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
    </Head>
    <ThemeProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeProvider>
  </CacheProvider>
);

export default wrapper.withRedux(MyApp);
