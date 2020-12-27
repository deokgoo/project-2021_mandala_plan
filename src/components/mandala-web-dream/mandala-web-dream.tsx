import React from 'react';
import styles from './mandala-web-dream.module.scss';
import MandalaWebUnit from '../mandala-web-unit';
import { dreamType, mandalaUnitType } from '../../redux/mandala/reducer/type';

const MandalaWebDream = ({dreamData}: {dreamData: {core: mandalaUnitType, side: dreamType}}) => {
  const renderUnitContainer = () => {
    return [
      <MandalaWebUnit unitData={dreamData.side[0]} />,
      <MandalaWebUnit unitData={dreamData.side[1]} />,
      <MandalaWebUnit unitData={dreamData.side[2]} />,
      <MandalaWebUnit unitData={dreamData.side[3]} />,
      <MandalaWebUnit unitData={dreamData.core} />,
      <MandalaWebUnit unitData={dreamData.side[4]} />,
      <MandalaWebUnit unitData={dreamData.side[5]} />,
      <MandalaWebUnit unitData={dreamData.side[6]} />,
      <MandalaWebUnit unitData={dreamData.side[7]} />,
    ]
  }
  return (
    <div className={styles.container}>
      {renderUnitContainer()}
    </div>
  );
};

export default MandalaWebDream;
