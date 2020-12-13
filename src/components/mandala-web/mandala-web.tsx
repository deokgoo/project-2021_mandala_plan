import React from 'react';
import useMandalaWeb from './hooks';
import styles from './mandala-web.module.scss';

const MandalaWeb = () => {
  const { mandalaData } = useMandalaWeb();
  return (
    <div className={styles.container}>
      {JSON.stringify(mandalaData)}
    </div>
  )
};

export default MandalaWeb;