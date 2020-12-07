import React from 'react';
import Header from '../../components/header';
import MandalaMobile from '../../components/mandala-mobile';
import TitleInput from '../../components/title-input';
import DescInput from '../../components/desc-input';
import Minimap from '../../components/minimap';

const MainMobile = () => {
  return (
    <>
      <Header />
      <Minimap />
      <MandalaMobile />
      <TitleInput />
      <DescInput />
    </>
  );
};

export default MainMobile;
