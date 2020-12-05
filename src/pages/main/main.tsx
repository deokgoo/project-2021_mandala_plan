import React from 'react';
import UseMain from './hooks';
import MainWeb from '../main-web';
import MainMobile from '../main-mobile';

const Main = () => {
  const mobileWidth = 576;
  const { windowDimensions } = UseMain();
  return (windowDimensions.width>mobileWidth ? <MainWeb /> : <MainMobile /> )
}

export default Main;