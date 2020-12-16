import React from 'react';
import Minimap from '../../molecules/minimap';
import MandalaMobile from '../../molecules/mandala-mobile';
import MandalaForm from '../../molecules/mandala-form';

const MobileMain = (props: any) => {
  return (
    <main>
      <Minimap />
      <MandalaMobile />
      <MandalaForm />
    </main>
  );
};

export default MobileMain;