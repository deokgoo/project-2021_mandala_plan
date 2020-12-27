import React from 'react';
import styles from './mandala-web.module.scss';
import useMandalaSelector from './hooks/use-mandala-web';
import MandalaWebDream from '../mandala-web-dream';

const MandalaWeb = () => {
  const {mandalaData} = useMandalaSelector();
  console.log(JSON.stringify(mandalaData));
  const renderDreamContainer = () => {
    return [
      <MandalaWebDream dreamData={mandalaData.dream0}/>,
      <MandalaWebDream dreamData={mandalaData.dream1}/>,
      <MandalaWebDream dreamData={mandalaData.dream2}/>,
      <MandalaWebDream dreamData={mandalaData.dream3}/>,
      <MandalaWebDream dreamData={mandalaData.dreamCore}/>,
      <MandalaWebDream dreamData={mandalaData.dream4}/>,
      <MandalaWebDream dreamData={mandalaData.dream5}/>,
      <MandalaWebDream dreamData={mandalaData.dream6}/>,
      <MandalaWebDream dreamData={mandalaData.dream7}/>
    ]
  }
  return (
    <div className={styles.container}>
      {renderDreamContainer()}
    </div>
  )
};

export default MandalaWeb;