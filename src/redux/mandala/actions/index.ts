import {
  UPDATE_CORE_UNIT,
  UPDATE_CORE_SIDE_UNIT,
  UPDATE_UNIT, UPDATE_CURRENT_UNIT,
} from './type';
import { mandalaStatusType } from '../reducer/type';

export const updateCoreUnit = (title: string, description: string) => ({
  type: UPDATE_CORE_UNIT,
  payload: {
    title,
    description,
  }
})

export const updateCoreSideUnit = (dreamNum: number, title: string, description: string) => ({
  type: UPDATE_CORE_SIDE_UNIT,
  payload: {
    dreamNum,
    title,
    description,
  }
});

export const updateUnit = (dreamNum: number, unitNum: number, title: string, description: string) => ({
  type: UPDATE_UNIT,
  payload: {
    dreamNum,
    unitNum,
    title,
    description,
  }
});

export const updateCurrentUnit = ({isCore, dreamNum, unitNum}: mandalaStatusType) => ({
  type: UPDATE_CURRENT_UNIT,
  payload: {
    isCore,
    dreamNum,
    unitNum,
  }
})
