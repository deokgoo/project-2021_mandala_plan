import { UPDATE_CORE_SIDE_UNIT, UPDATE_CORE_UNIT, UPDATE_CURRENT_UNIT, UPDATE_UNIT, } from '../actions/type';
import { AnyAction } from 'redux';
import initialState from './initialState';
import { stateType } from './type';

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
      const {dreamNum, title, description} = action.payload;
      const newState = {...state}
      newState.dreamCore.side[dreamNum] = {
        title,
        description,
      }
      // @ts-ignore
      newState[`dream${dreamNum}`].core = {
        title,
        description
      }
      return Object.assign({}, {...state}, newState);
    }

    case UPDATE_UNIT: {
      const {dreamNum, unitNum, title, description} = action.payload;
      const newDream = {title, description};
      const newState: stateType = Object.assign({}, {...state});
      console.log(dreamNum, unitNum, title, description);
      // @ts-ignore TODO: typescript
      newState[`dream${dreamNum}`].side[unitNum] = newDream;

      return newState;
    }
    case UPDATE_CURRENT_UNIT: {
      const {isCore, dreamNum, unitNum} = action.payload;
      return Object.assign({}, {...state}, {mandalaState: {isCore, dreamNum, unitNum}})
    }

    default:
      return state;
  }
}

export default reducer;
