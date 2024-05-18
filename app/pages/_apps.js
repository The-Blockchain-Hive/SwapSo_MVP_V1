import { useEffect } from "react";
import '../public/google-analytics.js';
import "../globals.css";

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const images = ["/1.png", "/2.png", "/3.png", "/4.png", "/5.png"];
    images.forEach((image) => {
      const preload = new Image();
      preload.src = image;
    });
  }, []);

  return (
    <Component {...pageProps} />
  );
}
