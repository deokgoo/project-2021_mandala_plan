import { useStore } from 'react-redux';
import { useEffect, useState } from 'react';
import { mandalaUnitType, stateType as mandalaStoreState } from '../reducer/type';
import { mandalaStatusType } from './type';

const useMandalaSelector = ({isCore, dreamNum, boxNum}: mandalaStatusType) => {
  const store = useStore();
  const [initialData, setInitialData] = useState<mandalaUnitType>();

  useEffect(() => {
    const getCurrentData = (): mandalaUnitType => {
      const { mandalaReducer }: {mandalaReducer: mandalaStoreState} = store.getState();
      if(isCore) {
        if(dreamNum===null||dreamNum===undefined) {
          return mandalaReducer.dreamCore.core
        } else {
          return mandalaReducer.dreamCore.side[dreamNum];
        }
      } else {
        if(dreamNum === null) throw new Error('unexpect error');
        if(boxNum===null) {
          if(dreamNum===undefined) throw new Error('unexpect error');
          return mandalaReducer.dreamCore.side[dreamNum];
        } else {
          // @ts-ignore
          return mandalaReducer[`dream${dreamNum}`][boxNum];
        }
      }
    }
    setInitialData(getCurrentData());
  }, [isCore, dreamNum, boxNum, store]);

  return {
    initialData,
  }
}

export default useMandalaSelector;
