import Head from 'next/head';
import type { AppProps } from 'next/app';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { wrapper } from 'common/store/store';
import ThemeProvider from 'common/providers/Theme';
import createEmotionCache from 'common/styles/createEmotionCache';
import CookieInfo from 'templates/CookieInfo';
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
      <meta charSet="UTF-8" />
      <meta
        name="description"
        content="Severino é uma plataforma para pessoas encontrarem profissionais que consigam resolver seus problemas. Nosso objetivo é tornar mais fácil a busca e o contato com diferentes prestadores de serviço. Além disso, você pode consultar o currículo e as avaliações dos profissionais e escolher o que mais te agrada"
      />
      <meta
        name="keywords"
        content="Severino, trabalhadores, trabalho, profissionais, resolver problemas"
      />
      <meta name="author" content="Gabriel Santiago" />
    </Head>
    <ThemeProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
      <CookieInfo />
    </ThemeProvider>
  </CacheProvider>
);

export default wrapper.withRedux(MyApp);
