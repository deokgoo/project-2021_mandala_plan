import { useStore } from 'react-redux';
import { useEffect, useState } from 'react';
import { dreamType, mandalaDreamType, mandalaUnitType, stateType as mandalaStoreState } from '../reducer/type';
import { mandalaStatusType } from './type';

const useMandalaDreamSelector = ({isCore, dreamNum}: mandalaStatusType) => {
  const store = useStore();
  const [initialData, setInitialData] = useState<mandalaDreamType>();

  useEffect(() => {
    const getCurrentData = (): { core: mandalaUnitType; side: dreamType } => {
      const { mandalaReducer }: {mandalaReducer: mandalaStoreState} = store.getState();
      if(isCore) {
        return mandalaReducer.dreamCore;
      } else {
        // @ts-ignore
        return mandalaReducer[`dream${dreamNum}`];
      }
    }
    setInitialData(getCurrentData());
  }, [isCore, dreamNum, store]);

  return {
    initialData,
  }
}

export default useMandalaDreamSelector;
