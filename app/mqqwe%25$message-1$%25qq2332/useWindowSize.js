// utils/useWindowSize.js

import { useState, useEffect } from 'react';

const useWindowSize = () => {
  const isClient = typeof window === 'object';

  const [windowSize, setWindowSize] = useState({
    width: isClient ? window.innerWidth : undefined,
    height: isClient ? window.innerHeight : undefined,
  });

  useEffect(() => {
    if (!isClient) {
      return; // Don't run on the server
    }

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isClient]);

  return windowSize;
};

export default useWindowSize;
