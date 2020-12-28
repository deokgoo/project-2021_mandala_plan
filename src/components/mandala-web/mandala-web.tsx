import React from 'react';
import styles from './mandala-web.module.scss';
import useMandalaSelector from './hooks/use-mandala-web';
import MandalaWebDream from '../mandala-web-dream';

const MandalaWeb = () => {
  const {mandalaData} = useMandalaSelector();
  const renderDreamContainer = () => {
    return [
      <MandalaWebDream key={0} dreamData={mandalaData.dream0} dreamStatus={{ isCore: false, dreamNum: 0 }} />,
      <MandalaWebDream key={1} dreamData={mandalaData.dream1} dreamStatus={{ isCore: false, dreamNum: 1 }} />,
      <MandalaWebDream key={2} dreamData={mandalaData.dream2} dreamStatus={{ isCore: false, dreamNum: 2 }} />,
      <MandalaWebDream key={3} dreamData={mandalaData.dream3} dreamStatus={{ isCore: false, dreamNum: 3 }} />,
      <MandalaWebDream key={4} dreamData={mandalaData.dreamCore} dreamStatus={{ isCore: true }} />,
      <MandalaWebDream key={5} dreamData={mandalaData.dream4} dreamStatus={{ isCore: false, dreamNum: 4 }} />,
      <MandalaWebDream key={6} dreamData={mandalaData.dream5} dreamStatus={{ isCore: false, dreamNum: 5 }} />,
      <MandalaWebDream key={7} dreamData={mandalaData.dream6} dreamStatus={{ isCore: false, dreamNum: 6 }} />,
      <MandalaWebDream key={8} dreamData={mandalaData.dream7} dreamStatus={{ isCore: false, dreamNum: 7 }} />,
    ]
  }
  return (
    <div className={styles.container}>
      {renderDreamContainer()}
    </div>
  )
};

export default MandalaWeb;