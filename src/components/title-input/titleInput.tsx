import React from 'react';
import styles from './titleInput.module.scss';

const TitleInput = (props: any) => {
  return (
    <>
      <div className={styles.layout}>
        <input className={styles.titleInput} type="text" value="wrwrw" />
      </div>
    </>
  );
};

export default TitleInput;