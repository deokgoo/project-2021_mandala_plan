import { useDispatch } from 'react-redux';
import { updateCoreUnit, updateCoreSideUnit, updateUnit } from '../actions';
import { mandalaStatusType, mandalaUnitType } from '../reducer/type';

const useMandalaUnitUpdate = ({isCore, dreamNum=null, unitNum=null}: mandalaStatusType) => {
  const dispatch = useDispatch();
  const updateMandala = ({title, description}: mandalaUnitType) => {
    if (isCore) {
      if (dreamNum === null) {
        dispatch(updateCoreUnit(title, description));
      } else {
        updateCoreSideUnit(dreamNum, title, description);
      }
    } else {
      if (dreamNum === null) throw new Error('unexpect error');
      if (unitNum === null) {
        updateCoreSideUnit(dreamNum, title, description);
      } else {
        updateUnit(dreamNum, unitNum, title, description);
      }
    }
  };
  return {
    updateMandala
  };
}

export default useMandalaUnitUpdate;