import React from 'react';
import MandalaUnitMobile from '../mandala-unit-mobile';
import Arrow from '../arrow';
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
      <Arrow />
      <div className={styles.layout}>
        <Arrow />
        <div className={styles.mandalaMobileLayout}>
          <div className={styles.container}>
            {renderMandalaMobile()}
          </div>
        </div>
        <Arrow />
      </div>
      <Arrow />
    </>
  );
};

export default MandalaMobile;
