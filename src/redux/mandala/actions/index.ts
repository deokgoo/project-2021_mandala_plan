import {
  UPDATE_CORE,
  UPDATE_CORE_SIDE,
  UPDATE_DREAM,
} from './type';

export const updateCore = (title: string, description: string) => ({
  type: UPDATE_CORE,
  payload: {
    title,
    description,
  }
})

export const updateCoreSide = (dreamNum: number, title: string, description: string) => ({
  type: UPDATE_CORE_SIDE,
  payload: {
    dreamNum,
    title,
    description,
  }
});

export const updateDream = (dreamNum: number, boxNum: number, title: string, description: string) => ({
  type: UPDATE_DREAM,
  payload: {
    dreamNum,
    boxNum,
    title,
    description,
  }
});
