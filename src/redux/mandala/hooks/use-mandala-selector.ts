import { useSelector } from 'react-redux';
import { globalReducerType } from '../../type';
import { stateType } from '../reducer/type';

const useMandalaSelector = () => {
  const mandalaData: stateType = useSelector((state: globalReducerType) => state.mandalaReducer);
  return {
    mandalaData
  }
}

export default useMandalaSelector;
