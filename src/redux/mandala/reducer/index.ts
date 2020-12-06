import {
  UPDATE_CORE,
  UPDATE_CORE_SIDE,
  UPDATE_DREAM,
} from '../actions/type';
import { AnyAction } from 'redux';

const initialState: any = {
  dreamCore: {
    core: {title: '', description: ''},
    side: [],
  },
  dream0: [{}, {}, {}, {}, {}, {}, {}, {}],
  dream1: [{}, {}, {}, {}, {}, {}, {}, {}],
  dream2: [{}, {}, {}, {}, {}, {}, {}, {}],
  dream3: [{}, {}, {}, {}, {}, {}, {}, {}],
  dream4: [{}, {}, {}, {}, {}, {}, {}, {}],
  dream5: [{}, {}, {}, {}, {}, {}, {}, {}],
  dream6: [{}, {}, {}, {}, {}, {}, {}, {}],
  dream7: [{}, {}, {}, {}, {}, {}, {}, {}],
}

const reducer = (state = initialState, action: AnyAction) => {
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
      const newState = Object.assign({}, {...state});
      newState[`dream${dreamNum}`][boxNum] = newDream;
      return newState;
    }

    default:
      return state;
  }
}

export default reducer;
