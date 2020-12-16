import React from 'react';
import Header from '../../components/header';
import MandalaWeb from '../../components/mandala-web';
import styles from './main-web.module.scss';
import SettingWeb from '../../components/setting-web';

const MainWeb = () => {
  // const [menuClose, setMenuClose] = useState(false);
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.content}>
          <MandalaWeb />
        </div>
        <div className={styles.setting}>
          <SettingWeb  isCore={true}/>
        </div>
      </div>

    </>
  );
};

export default MainWeb;
