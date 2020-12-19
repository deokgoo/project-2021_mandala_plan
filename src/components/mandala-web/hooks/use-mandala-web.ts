import { stateType } from '../../../redux/mandala/reducer/type';
import { useSelector } from 'react-redux';
import { globalReducerType } from '../../../redux/type';

const useMandalaWeb = () => {
  const mandalaData: stateType = useSelector((state: globalReducerType) => state.mandalaReducer);
  return {
    mandalaData
  }
}

export default useMandalaWeb;