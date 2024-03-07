import { useEffect } from "react";
import '../public/google-analytics.js';
import "../globals.css";

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const images = ["/eliteweb3.png", "/microsoft.png", "/stackos.png"];
    images.forEach((image) => {
      const preload = new Image();
      preload.src = image;
    });
  }, []);

  return (
    <Component {...pageProps} />
  );
}
