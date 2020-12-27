import { useEffect, useState } from 'react';
import { viewTypeEnum } from './type';

const getWindowDimensions = () => {
  const {innerWidth: width, innerHeight: height} = window;
  return {
    width,
    height
  };
}

const useMain = () => {
  const mobileWidth = 645;
  const [windowViewType, setWindowViewType] = useState<viewTypeEnum>(
    getWindowDimensions().width<mobileWidth?viewTypeEnum.mobile:viewTypeEnum.web);

  useEffect(() => {
    const handleResize = () => {
      setWindowViewType(
        getWindowDimensions().width<mobileWidth?viewTypeEnum.mobile:viewTypeEnum.web);
    }
    window.removeEventListener('resize', handleResize);
    window.addEventListener('resize', handleResize);
  }, []);

  return {
    windowViewType
  }
}

export default useMain;
