import React  from 'react';
import styles from './mandala-form.module.scss';

const MandalaForm = (props: any) => {
  return (
    <div className={styles.container}>
      <div className={styles.titleInputContainer}>
        <input className={styles.titleInput} type="text" />
      </div>
      <div className={styles.descriptionContainer}>
        <textarea className={styles.description} />
      </div>
    </div>
  );
};

export default MandalaForm;
