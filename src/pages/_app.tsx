import { AppProps } from 'next/app'; // Serve para tipar o App

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
