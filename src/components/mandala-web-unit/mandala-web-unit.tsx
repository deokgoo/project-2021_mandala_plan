import React from 'react';
import styles from './mandala-web-unit.module.scss';

const MandalaWebUnit = ({unitData, color}: any) => {
  return (
    <div className={`${styles.container} ${color}`}>
      {unitData.title}
    </div>
  );
};

export default MandalaWebUnit;
