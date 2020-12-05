import { useState, useEffect } from 'react';

const getWindowDimensions = () => {
  const {innerWidth: width, innerHeight: height} = window;
  return {
    width,
    height
  };
}

const useMain = () => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    }
    window.removeEventListener('resize', handleResize);
    window.addEventListener('resize', handleResize);
  }, []);

  return {
    windowDimensions
  }
}

export default useMain;
