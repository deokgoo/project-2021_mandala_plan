import React from 'react';
import Header from '../../components/header';
import MandalaWeb from '../../components/mandala-web';
import styles from './main-web.module.scss';
import SettingWeb from '../../components/setting-web';
import useMainWeb from './hooks';

const MainWeb = () => {
  // const [menuClose, setMenuClose] = useState(false);
  const {select} = useMainWeb();
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.content}>
          <MandalaWeb />
        </div>
        <div className={styles.setting}>
          <SettingWeb {...select}/>
        </div>
      </div>
    </>
  );
};

export default MainWeb;

