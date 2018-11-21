import * as types from '../actions/actionTypes';

const initialState = {
  user: { }
};

export default (state = initialState, action) => {
  const { user } = state;
  const { type, payload } = action;

  switch (type) {
    case types.LOGIN: {
      return {
        ...state,
        user: {...payload, ...user}
      };
    }
    // case types.REMOVE: {
    //   return {
    //     ...state,
    //     todos: todos.filter((todo, i) => i !== payload)
    //   };
    // }
    default:
      return state
  }
};