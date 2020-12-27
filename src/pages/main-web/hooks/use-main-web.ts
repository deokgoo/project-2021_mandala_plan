import { useState } from 'react';
import { mandalaStatusType } from '../../../redux/mandala/reducer/type';

const useMainWeb = () => {
  const [select, setSelect] = useState<mandalaStatusType>({
    isCore: true
  });
  const updateSelect = (payload: mandalaStatusType) => {
    // updateSelect
    setSelect(payload);
  }
  return {
    select,
    updateSelect,
  }
};

export default useMainWeb;
