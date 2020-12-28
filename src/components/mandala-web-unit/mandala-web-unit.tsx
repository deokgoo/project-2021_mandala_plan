import React from 'react';
import styles from './mandala-web-unit.module.scss';
import useMandalaCurrentUnit from '../../redux/mandala/hooks/use-mandala-current-unit';
import { propsType } from './type';

const MandalaWebUnit = ({unitState, unitData}: propsType) => {
  const { updateCurrentState } = useMandalaCurrentUnit();
  const { currentState, currentTheme } = useMandalaCurrentUnit();
  const onClick = () => {
    updateCurrentState(unitState);
  }
  const isSelected = () => {
    if(currentState.isCore !== unitState.isCore) return false;
    if(currentState.dreamNum !== unitState.dreamNum) return false;
    if(currentState.unitNum !== unitState.unitNum) return false;
    return true;
  }
  const theme = () => {
    // @ts-ignore
    const theme = currentTheme[`theme${currentTheme.currentTheme}`];
    if(unitState.isCore) {
      if(unitState.unitNum === undefined) {
        return theme.core;
      }else {
        return theme.side;
      }
    }else {
      if(unitState.unitNum === undefined) {
        return theme.side;
      }else {
        return theme.dream;
      }
    }
  }
  return (
    <div className={`${isSelected()?styles.selected:''} ${styles.container} ${theme()}`} onClick={onClick}>
      {unitData.title}
    </div>
  );
};

export default MandalaWebUnit;
