import { mandalaStatusType, refsType } from './type';
import { useDispatch } from 'react-redux';
import { updateCore, updateCoreSide, updateDream } from '../actions';

const useMandalaUpdate = ({isCore, dreamNum=null, boxNum=null}: mandalaStatusType) => {
  const dispatch = useDispatch();
  const updateMandala = ({titleRef, descriptionRef}: refsType) => {
    const title = titleRef.current?.value || '';
    const description = descriptionRef.current?.value || '';
    if (isCore) {
      if (dreamNum === null) {
        dispatch(updateCore(title, description));
      } else {
        updateCoreSide(dreamNum, title, description);
      }
    } else {
      if (dreamNum === null) throw new Error('unexpect error');
      if (boxNum === null) {
        updateCoreSide(dreamNum, title, description);
      } else {
        updateDream(dreamNum, boxNum, title, description);
      }
    }
  };
  return {
    updateMandala
  };
}

export default useMandalaUpdate;