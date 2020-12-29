import React, { FormEvent } from 'react';
import styles from './setting-web.module.scss';
import useSettingWeb from './hooks';
import useMandalaUnitUpdate from '../../redux/mandala/hooks/use-mandala-unit-update';
import useMandalaCurrentUnit from '../../redux/mandala/hooks/use-mandala-current-unit';
import useMandalaUnitSelector from '../../redux/mandala/hooks/use-mandala-unit-selector';
import useMandalaLocal from '../../redux/mandala/hooks/use-mandala-local';

const SettingWeb = () => {
  const { refs: {titleRef, descriptionRef } } = useSettingWeb();
  const { currentState, theme } = useMandalaCurrentUnit();
  const { updateMandala } = useMandalaUnitUpdate(currentState ?? {isCore: true});
  const { storeData, loadData } = useMandalaLocal();
  const { initialData } = useMandalaUnitSelector(currentState);

  const updateMandalaUnit = (e: FormEvent) => {
    e.preventDefault();
    if(!titleRef.current || !descriptionRef.current) return;
    const title = titleRef.current?.value;
    const description = descriptionRef.current?.value;
    updateMandala({title, description});
    // value reset
    titleRef.current.value = '';
    descriptionRef.current.value = '';
  }

  const saveLocalStoarge = (e: FormEvent) => {
    e.preventDefault();
    storeData();
  }

  const loadLocalStoarge = (e: FormEvent) => {
    e.preventDefault();
    loadData();
  }
  // {JSON.stringify(currentState)}
  return (
    <div className={styles.container}>
      <div className={`${styles.preview} ${theme}`}>
        <div className={styles.preview__title}>
          {initialData?.title}
        </div>
      </div>
      <form className={styles.formController}>
        <label className={styles.titleLabel} htmlFor="title">Title</label>
        <input id="title" className={styles.input} type="text" ref={titleRef} />
        <label className={styles.titleLabel} htmlFor="description">Description</label>
        <input id="description" className={styles.input} type="text" ref={descriptionRef} />
        <button className={styles.submit} onClick={updateMandalaUnit}>
          update
        </button>
        <button onClick={saveLocalStoarge}>save</button>
        <button onClick={loadLocalStoarge}>load</button>
      </form>
    </div>
  );
};

export default SettingWeb;
