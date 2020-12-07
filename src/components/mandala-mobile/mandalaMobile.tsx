import React from 'react';
import MandalaUnitMobile from '../mandala-unit-mobile';
import ArrowHorizontal from '../arrow-horizontal';
import ArrowVertical from '../arrow-vertical';
import styles from './mandalaMobile.module.scss';

const MandalaMobile = (props: any) => {
  return (
    <>
      <ArrowVertical />
      <div className={styles.layout}>
        <ArrowHorizontal />
        <div className={styles.mandalaMobileLayout}>
          <div className={styles.container}>
            <MandalaUnitMobile />
            <MandalaUnitMobile />
            <MandalaUnitMobile />
            <MandalaUnitMobile />
            <MandalaUnitMobile />
            <MandalaUnitMobile />
            <MandalaUnitMobile />
            <MandalaUnitMobile />
            <MandalaUnitMobile />
          </div>
        </div>
        <ArrowHorizontal />
      </div>
      <ArrowVertical />
    </>
  );
};

export default MandalaMobile;
