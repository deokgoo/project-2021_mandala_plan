import React from 'react';
import UseMain from './hooks';
import MainWeb from '../main-web';
import MainMobile from '../main-mobile';
import { viewTypeEnum } from './hooks/type';

const Main = () => {
  const { windowViewType } = UseMain();
  return (windowViewType===viewTypeEnum.web ? <MainWeb /> : <MainMobile /> )
}

export default Main;