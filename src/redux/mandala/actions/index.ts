import {
  UPDATE_CORE_UNIT,
  UPDATE_CORE_SIDE_UNIT,
  UPDATE_UNIT,
} from './type';

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
