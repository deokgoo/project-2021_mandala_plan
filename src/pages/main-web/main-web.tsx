import React from 'react';
import Header from '../../components/UI/organisms/header';
import MandalaWeb from '../../components/UI/organisms/mandala-web';
import styles from './main-web.module.scss';
import SettingWeb from '../../components/UI/organisms/setting-web';

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
          <SettingWeb />
        </div>
      </div>

    </>
  );
};

export default MainWeb;
