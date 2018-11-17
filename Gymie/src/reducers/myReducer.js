import * as types from '../actions/actionTypes';

const initialState = {
  todos: ["shopping"]
};

export default (state = initialState, action) => {
  const { todos } = state;
  const { type, payload } = action;

  switch (type) {
    case types.ADD: {
      console.log("THIS WAS CALLED!!");
      return {
        ...state,
        todos: [payload, ...todos]
      };
    }
    case types.REMOVE: {
      return {
        ...state,
        todos: todos.filter((todo, i) => i !== payload)
      };
    }
    default:
      return state
  }
};