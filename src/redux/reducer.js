import { combineReducers } from 'redux';

const rootReducer = {
  root: () => null,
  hello: (state = { times: 1, age: 1 }, action) => {
    switch (action.type) {
      case 'sayHello': {
        // let t = state.times;
        // t.asd = 2;
        return { ...state, times: action.times };
      }
      default:
        return state;
    }
  },
};

export default rootReducer;