import {
  UPDATE_CORE_UNIT,
  UPDATE_CORE_SIDE_UNIT,
  UPDATE_UNIT,
} from '../actions/type';
import { AnyAction } from 'redux';
import initialState from './initialState';
import { sideDreamType, stateType } from './type';

const reducer = (state: stateType = initialState, action: AnyAction) => {
  switch (action.type) {
    case UPDATE_CORE_UNIT: {
      const {title, description} = action.payload;
      const newDreamCore = {
        ...state.dreamCore,
        core: {title, description},
      }
      return Object.assign({}, {...state}, {dreamCore: newDreamCore});
    }
    case UPDATE_CORE_SIDE_UNIT: {
      const {unitNum, title, description} = action.payload;
      const newDreamCore = {
        ...state.dreamCore
      }
      newDreamCore.side[unitNum] = {
        title,
        description,
      }
      return Object.assign({}, {...state}, {dreamCore: newDreamCore})
    }
    case UPDATE_UNIT: {
      const {dreamNum, unitNum, title, description} = action.payload;
      const newDream = {title, description};
      const newState: stateType = Object.assign({}, {...state});
      // @ts-ignore TODO: typescript
      newState[sideDreamType[dreamNum]][unitNum] = newDream;

      return newState;
    }

    default:
      return state;
  }
}

export default reducer;
