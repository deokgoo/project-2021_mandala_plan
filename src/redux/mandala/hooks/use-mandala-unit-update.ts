import { useDispatch } from 'react-redux';
import { updateCoreUnit, updateCoreSideUnit, updateUnit } from '../actions';
import { mandalaStatusType, mandalaUnitType } from '../reducer/type';

const useMandalaUnitUpdate = ({isCore, dreamNum=null, unitNum=null}: mandalaStatusType) => {
  const dispatch = useDispatch();
  const updateMandala = ({title, description}: mandalaUnitType) => {
    if (isCore) {
      if (unitNum === null) {
        console.log(1);
        dispatch(updateCoreUnit(title, description));
      } else {
        console.log(2);
        dispatch(updateCoreSideUnit(unitNum, title, description));
      }
    } else {
      if (dreamNum === null) throw new Error('unexpect error');
      if (unitNum === null) {
        console.log(3);
        dispatch(updateCoreSideUnit(dreamNum, title, description));
      } else {
        console.log(4);
        dispatch(updateUnit(dreamNum, unitNum, title, description));
      }
    }
  };
  return {
    updateMandala
  };
}

export default useMandalaUnitUpdate;