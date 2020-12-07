import React from 'react';
import styles from './descInput.module.scss'

const DescInput = (props: any) => {
  return (
    <>
      <div className={styles.layout}>
        <textarea className={styles.description}>description</textarea>
      </div>
    </>
  );
}

export default DescInput;