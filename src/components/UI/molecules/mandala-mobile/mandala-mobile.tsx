import React from 'react';
import MandalaUnitMobile from '../mandala-unit-mobile';
import ArrowHorizontal from '../arrow-horizontal';
import ArrowVertical from '../arrow-vertical';
import styles from './mandala-mobile.module.scss';

const MandalaMobile = (props: any) => {
  const renderMandalaMobile = () => {
    let renderResult = [];
    for(let i = 0; i < 9; i++) {
      renderResult.push(<MandalaUnitMobile key={i} />);
    }
    return renderResult;
  }
  return (
    <>
      <ArrowVertical />
      <div className={styles.layout}>
        <ArrowHorizontal />
        <div className={styles.mandalaMobileLayout}>
          <div className={styles.container}>
            {renderMandalaMobile()}
          </div>
        </div>
        <ArrowHorizontal />
      </div>
      <ArrowVertical />
    </>
  );
};

export default MandalaMobile;
