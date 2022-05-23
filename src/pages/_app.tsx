import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import 'common/styles/globals.css';
import { store } from 'common/store/store';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <Head>
      <title>Severino</title>
      <meta name="description" content="Severino" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Component {...pageProps} />
  </Provider>
);

export default MyApp;
