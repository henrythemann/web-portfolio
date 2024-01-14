import '../styles/global.css';
import Head from 'next/head';
import useScrollRestoration from "../hooks/useScrollRestoration";

function MyApp({ Component, pageProps, router }) {
  useScrollRestoration(router);
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