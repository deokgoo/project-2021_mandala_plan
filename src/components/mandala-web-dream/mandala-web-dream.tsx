import React from 'react';
import styles from './mandala-web-dream.module.scss';
import MandalaWebUnit from '../mandala-web-unit';
import { propsType } from './type';

const MandalaWebDream = ({dreamData, dreamStatus}: propsType) => {
  const renderUnitContainer = () => {
    return [
      <MandalaWebUnit key={0} unitData={dreamData.side[0]} unitState={{ ...dreamStatus, unitNum: 0 }} />,
      <MandalaWebUnit key={1} unitData={dreamData.side[1]} unitState={{ ...dreamStatus, unitNum: 1 }} />,
      <MandalaWebUnit key={2} unitData={dreamData.side[2]} unitState={{ ...dreamStatus, unitNum: 2 }} />,
      <MandalaWebUnit key={3} unitData={dreamData.side[3]} unitState={{ ...dreamStatus, unitNum: 3 }} />,
      <MandalaWebUnit key={4} unitData={dreamData.core} unitState={dreamStatus} />,
      <MandalaWebUnit key={5} unitData={dreamData.side[4]} unitState={{ ...dreamStatus, unitNum: 4 }} />,
      <MandalaWebUnit key={6} unitData={dreamData.side[5]} unitState={{ ...dreamStatus, unitNum: 5 }} />,
      <MandalaWebUnit key={7} unitData={dreamData.side[6]} unitState={{ ...dreamStatus, unitNum: 6 }} />,
      <MandalaWebUnit key={8} unitData={dreamData.side[7]} unitState={{ ...dreamStatus, unitNum: 7 }} />,
    ]
  }
  return (
    <div className={styles.container}>
      {renderUnitContainer()}
    </div>
  );
};

export default MandalaWebDream;
