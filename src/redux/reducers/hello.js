
export const hello = (state = { msg: 'qwe' }, action) => {
  switch (action.type) {
    case 'SAY_HELLO': {
      return { ...state, msg: `Hello ${action.name}` };
    }break;
    default: return state;
  }
};