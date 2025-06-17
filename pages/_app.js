import { useEffect } from 'react';
import '../styles/globals.css';
import Footer from '../components/Footer';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const script = document.createElement('script');
      script.src = 'https://sdk.minepi.com/pi-sdk.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
