import React, { FormEvent } from 'react';
import styles from './setting-web.module.scss';
import useSettingWeb from './hooks';
import useMandalaUnitUpdate from '../../redux/mandala/hooks/use-mandala-unit-update';
import useMandalaCurrentUnit from '../../redux/mandala/hooks/use-mandala-current-unit';
import useMandalaUnitSelector from '../../redux/mandala/hooks/use-mandala-unit-selector';

const SettingWeb = () => {
  const { refs: {titleRef, descriptionRef, themeRef} } = useSettingWeb();
  const { currentState } = useMandalaCurrentUnit();
  const { updateMandala } = useMandalaUnitUpdate(currentState ?? {isCore: true});
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
  // {JSON.stringify(currentState)}
  return (
    <div className={styles.container}>
      <div className={styles.preview}>{initialData?.title}</div>
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
