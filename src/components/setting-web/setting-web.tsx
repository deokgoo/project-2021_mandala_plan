import React from 'react';
import styles from './setting-web.module.scss';
import useSettingWeb from './hooks';

const SettingWeb = ({isCore, boxNum}: {isCore: boolean, boxNum?: number}) => {
  const { refs, initialData, updateMandalaData } = useSettingWeb({isCore, boxNum});
  return (
    <div className={styles.container}>
      <form>
        {JSON.stringify(initialData)}
        <input type="text" ref={refs.titleRef} />
        <input type="text" ref={refs.descriptionRef} />
        <input type="select" ref={refs.theme} />
        <button onClick={updateMandalaData}>
          update
        </button>
      </form>
    </div>
  );
};

export default SettingWeb;
