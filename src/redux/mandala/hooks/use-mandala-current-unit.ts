import { useDispatch, useSelector } from 'react-redux';
import { mandalaStatusType, themesType } from '../reducer/type';
import { updateCurrentUnit } from '../actions';
import { useCallback } from 'react';
import { globalReducerType } from '../../type';

const useMandalaCurrentUnit = () => {
  const dispatch = useDispatch();
  const currentState: mandalaStatusType = useSelector((state: globalReducerType) => state.mandalaReducer.mandalaState);
  const currentTheme: themesType = useSelector((state: globalReducerType) => state.mandalaReducer.themes);

  const updateCurrentState = useCallback(async (payload: mandalaStatusType) => {
    dispatch(updateCurrentUnit(payload));
  }, [dispatch]);

  return {
    updateCurrentState,
    currentState,
    currentTheme,
  }
}

export default useMandalaCurrentUnit;
