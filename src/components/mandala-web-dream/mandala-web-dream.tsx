import React from 'react';
import styles from './mandala-web-dream.module.scss';
import MandalaWebUnit from '../mandala-web-unit';
import { dreamType, mandalaUnitType } from '../../redux/mandala/reducer/type';

const MandalaWebDream = ({dreamData, coreTheme, sideTheme}: {dreamData: {core: mandalaUnitType, side: dreamType}, coreTheme: string, sideTheme: string}) => {
  const renderUnitContainer = () => {
    return [
      <MandalaWebUnit key={0} unitData={dreamData.side[0]} color={sideTheme} />,
      <MandalaWebUnit key={1} unitData={dreamData.side[1]} color={sideTheme} />,
      <MandalaWebUnit key={2} unitData={dreamData.side[2]} color={sideTheme} />,
      <MandalaWebUnit key={3} unitData={dreamData.side[3]} color={sideTheme} />,
      <MandalaWebUnit key={4} unitData={dreamData.core} color={coreTheme} />,
      <MandalaWebUnit key={5} unitData={dreamData.side[4]} color={sideTheme} />,
      <MandalaWebUnit key={6} unitData={dreamData.side[5]} color={sideTheme} />,
      <MandalaWebUnit key={7} unitData={dreamData.side[6]} color={sideTheme} />,
      <MandalaWebUnit key={8} unitData={dreamData.side[7]} color={sideTheme} />,
    ]
  }
  return (
    <div className={styles.container}>
      {renderUnitContainer()}
    </div>
  );
};

export default MandalaWebDream;
