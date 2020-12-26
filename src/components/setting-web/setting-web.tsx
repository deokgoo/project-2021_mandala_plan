import React, { FormEvent } from 'react';
import styles from './setting-web.module.scss';
import useSettingWeb from './hooks';
import useMandalaUnitUpdate from '../../redux/mandala/hooks/use-mandala-unit-update';
import useMandalaUnitSelector from '../../redux/mandala/hooks/use-mandala-unit-selector';

const SettingWeb = ({isCore, dreamNum, unitNum}: {isCore: boolean, dreamNum?: number, unitNum?: number}) => {
  const { refs: {titleRef, descriptionRef, themeRef} } = useSettingWeb();
  const {　updateMandala　} = useMandalaUnitUpdate({isCore, dreamNum, unitNum});
  const { initialData } = useMandalaUnitSelector({isCore, dreamNum, unitNum});
  const updateMandalaUnit = (e: FormEvent) => {
    e.preventDefault();
    if(!titleRef.current || !descriptionRef.current) return;
    const title = titleRef.current?.value;
    const description = descriptionRef.current?.value;
    updateMandala({title, description});
    titleRef.current.value = '';
    descriptionRef.current.value = '';
  }
  return (
    <div className={styles.container}>
      {JSON.stringify(initialData)}
      <form>
        <input type="text" ref={titleRef} />
        <input type="text" ref={descriptionRef} />
        <input type="select" ref={themeRef} />
        <button onClick={updateMandalaUnit}>
          update
        </button>
      </form>
    </div>
  );
};

export default SettingWeb;
