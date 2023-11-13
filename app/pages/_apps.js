import '../globals.css';
 
export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const images = ['/eliteweb3.png', '/microsoft.png', '/stackos.png'];

    images.forEach(image => {
      const preload = new images();
      preload.src = image;
    });
  },[]);
  return <Component {...pageProps} />
}