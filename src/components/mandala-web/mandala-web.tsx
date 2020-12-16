import React from 'react';
import styles from './mandala-web.module.scss';
import useMandalaSelector from '../../redux/mandala/hooks';

const MandalaWeb = () => {
  const { mandalaData } = useMandalaSelector();
  return (
    <div className={styles.container}>
      {JSON.stringify(mandalaData)}
    </div>
  )
};

export default MandalaWeb;