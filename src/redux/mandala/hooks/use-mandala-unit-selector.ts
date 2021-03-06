import { useStore } from 'react-redux';
import { useEffect, useState } from 'react';
import { mandalaStatusType, mandalaUnitType, stateType as mandalaStoreState } from '../reducer/type';

const useMandalaUnitSelector = ({isCore, dreamNum, unitNum}: mandalaStatusType) => {
  const store = useStore();
  const [initialData, setInitialData] = useState<mandalaUnitType>();

  useEffect(() => {
    const getCurrentData = (): mandalaUnitType => {
      const { mandalaReducer }: {mandalaReducer: mandalaStoreState} = store.getState();
      if(isCore) {
        if(unitNum === undefined || unitNum === null) {
          return mandalaReducer.dreamCore.core
        } else {
          return mandalaReducer.dreamCore.side[unitNum];
        }
      } else {
        if(dreamNum === null) throw new Error('unexpect error');
        if(unitNum === null || unitNum === undefined) {
          if(dreamNum === undefined) throw new Error('unexpect error');
          return mandalaReducer.dreamCore.side[dreamNum];
        } else {
          // @ts-ignore
          return mandalaReducer[`dream${dreamNum}`].side[unitNum];
        }
      }
    }
    setInitialData(getCurrentData());
  }, [isCore, dreamNum, unitNum, store]);

  return {
    initialData,
  }
}

export default useMandalaUnitSelector;
