import { useEffect, useRef, useState } from 'react';
import { mandalaUnitType, stateType as mandalaStoreState } from '../../../redux/mandala/reducer/type';
import { useDispatch, useStore } from 'react-redux';
import { updateCore, updateCoreSide, updateDream } from '../../../redux/mandala/actions';

const useSettingWeb = ({isCore, dreamNum=null, boxNum=null}: {isCore: boolean, dreamNum?: number|null, boxNum?: number|null}) => {
  const store = useStore();
  const dispatch = useDispatch();
  const [initialData, setInitialData] = useState<mandalaUnitType>();
  const refs = {
    titleRef: useRef<HTMLInputElement>(null),
    descriptionRef: useRef<HTMLInputElement>(null),
    theme: useRef<HTMLInputElement>(null),
  }

  useEffect(() => {
    const getCurrentData = (): mandalaUnitType => {
      const { mandalaReducer }: {mandalaReducer: mandalaStoreState} = store.getState();
      if(isCore) {
        if(dreamNum===null) {
          return mandalaReducer.dreamCore.core
        } else {
          return mandalaReducer.dreamCore.side[dreamNum];
        }
      } else {
        if(boxNum===null && dreamNum!==null) {
          return mandalaReducer.dreamCore.side[dreamNum];
        } else {
          // @ts-ignore
          return mandalaReducer[`dream${dreamNum}`][boxNum];
        }
      }
    }
    setInitialData(getCurrentData());
  }, [isCore, dreamNum, boxNum, store]);

  const updateMandalaData = (event: any) => {
    event.preventDefault();
    const title = refs.titleRef.current?.value || '';
    const description = refs.descriptionRef.current?.value || '';
    console.log(dreamNum, boxNum, title, description);
    if(isCore) {
      if(dreamNum===null) {
        dispatch(updateCore(title, description));
      } else {
        updateCoreSide(dreamNum, title, description);
      }
    } else {
      if(dreamNum === null) throw new Error('unexpect error');
      if (boxNum === null) {
        updateCoreSide(dreamNum, title, description);
      } else {
        updateDream(dreamNum, boxNum, title, description);
      }
    }
  }

  return {
    refs,
    initialData,
    updateMandalaData,
  }
}

export default useSettingWeb;