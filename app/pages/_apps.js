import { useEffect } from 'react';
import PurchasesProvider from '../components/PurchasesProvider'; // Adjust the path accordingly
import '../globals.css';

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const images = ['/eliteweb3.png', '/microsoft.png', '/stackos.png'];

    images.forEach(image => {
      const preload = new Image();
      preload.src = image;
    });
  }, []);

  return (
    <PurchasesProvider>
      <Component {...pageProps} />
    </PurchasesProvider>
  );
}
