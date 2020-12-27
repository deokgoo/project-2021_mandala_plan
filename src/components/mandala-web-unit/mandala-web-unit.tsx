import React from 'react';
import styles from './mandala-web-unit.module.scss';

const MandalaWebUnit = ({unitData}: any) => {
  return (
    <div className={styles.container}>
      {unitData.title}
    </div>
  );
};

export default MandalaWebUnit;
