import {
  UPDATE_CORE,
  UPDATE_CORE_SIDE,
  UPDATE_DREAM,
} from '../actions/type';
import { AnyAction } from 'redux';
import initialState from './initialState';
import { sideDreamType, stateType } from './type';

const reducer = (state: stateType = initialState, action: AnyAction) => {
  switch (action.type) {
    case UPDATE_CORE: {
      const {title, description} = action.payload;
      const newDreamCore = {
        ...state.dreamCore,
        core: {title, description},
      }
      return Object.assign({}, {...state}, {dreamCore: newDreamCore});
    }
    case UPDATE_CORE_SIDE: {
      const {boxNum, title, description} = action.payload;
      const newDreamCore = {
        ...state.dreamCore
      }
      newDreamCore.side[boxNum] = {
        title,
        description,
      }
      return Object.assign({}, {...state}, {dreamCore: newDreamCore})
    }
    case UPDATE_DREAM: {
      const {dreamNum, boxNum, title, description} = action.payload;
      const newDream = {title, description};
      const newState: stateType = Object.assign({}, {...state});
      // @ts-ignore TODO: typescript
      newState[sideDreamType[dreamNum]][boxNum] = newDream;

      return newState;
    }

    default:
      return state;
  }
}

export default reducer;
