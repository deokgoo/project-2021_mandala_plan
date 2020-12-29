import { useDispatch, useSelector } from 'react-redux';
import { mandalaStatusType, themesType } from '../reducer/type';
import { updateCurrentUnit } from '../actions';
import { useCallback, useEffect, useState } from 'react';
import { globalReducerType } from '../../type';

const useMandalaCurrentUnit = () => {
  const dispatch = useDispatch();
  const [theme, setTheme] = useState();
  const currentState: mandalaStatusType = useSelector((state: globalReducerType) => state.mandalaReducer.mandalaState);
  const currentTheme: themesType = useSelector((state: globalReducerType) => state.mandalaReducer.themes);

  useEffect(() => {
    const judgeTheme = () => {
      // @ts-ignore
      const theme = currentTheme[`theme${currentTheme.currentTheme}`];
      if(currentState.isCore) {
        if(currentState.unitNum === undefined) {
          return theme.core;
        }else {
          return theme.side;
        }
      }else {
        if(currentState.unitNum === undefined) {
          return theme.side;
        }else {
          return theme.dream;
        }
      }
    }
    setTheme(judgeTheme());
  }, [currentState, currentTheme])

  const updateCurrentState = useCallback(async (payload: mandalaStatusType) => {
    dispatch(updateCurrentUnit(payload));
  }, [dispatch]);

  return {
    updateCurrentState,
    currentState,
    currentTheme,
    theme,
  }
}

export default useMandalaCurrentUnit;
