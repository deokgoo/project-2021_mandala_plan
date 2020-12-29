import { useDispatch, useStore } from 'react-redux';
import { updateMandalaData } from '../actions';

const useMandalaLocal = () => {
  const store = useStore();
  const dispatch = useDispatch();

  const storeData = () => {
    localStorage.setItem('mandala', JSON.stringify(store.getState()));
  }

  const loadData = () => {
    const mandalaData = localStorage.getItem('mandala');
    if(!mandalaData) return;
    dispatch(updateMandalaData(JSON.parse(mandalaData)));
  }

  return {
    storeData,
    loadData,
  }
}

export default useMandalaLocal;
