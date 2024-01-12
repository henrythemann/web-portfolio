import '../styles/global.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (<>
  <Head>
      <title>Henry Mann Portfolio</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/favicon.ico" />
  </Head>
  <Component {...pageProps} />
  </>);
}

export default MyApp;