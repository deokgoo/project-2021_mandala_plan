import React from 'react';
import styles from './mandala-web.module.scss';
import useMandalaSelector from './hooks/use-mandala-web';
import MandalaWebDream from '../mandala-web-dream';

const MandalaWeb = () => {
  const {mandalaData} = useMandalaSelector();

  const renderDreamContainer = () => {
    return [
      <MandalaWebDream key={0} dreamData={mandalaData.dream0} coreTheme={styles.color5} sideTheme={styles.color1} />,
      <MandalaWebDream key={1} dreamData={mandalaData.dream1} coreTheme={styles.color5} sideTheme={styles.color1} />,
      <MandalaWebDream key={2} dreamData={mandalaData.dream2} coreTheme={styles.color5} sideTheme={styles.color1} />,
      <MandalaWebDream key={3} dreamData={mandalaData.dream3} coreTheme={styles.color5} sideTheme={styles.color1} />,
      <MandalaWebDream key={4} dreamData={mandalaData.dreamCore} coreTheme={styles.color2} sideTheme={styles.color5} />,
      <MandalaWebDream key={5} dreamData={mandalaData.dream4} coreTheme={styles.color5} sideTheme={styles.color1} />,
      <MandalaWebDream key={6} dreamData={mandalaData.dream5} coreTheme={styles.color5} sideTheme={styles.color1} />,
      <MandalaWebDream key={7} dreamData={mandalaData.dream6} coreTheme={styles.color5} sideTheme={styles.color1} />,
      <MandalaWebDream key={8} dreamData={mandalaData.dream7} coreTheme={styles.color5} sideTheme={styles.color1} />,
    ]
  }
  return (
    <div className={styles.container}>
      {renderDreamContainer()}
    </div>
  )
};

export default MandalaWeb;