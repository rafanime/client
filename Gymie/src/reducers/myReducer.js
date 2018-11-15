import { REHYDRATE } from 'redux-persist';


// Initial state of the store
const initialState = {
  todos: ["Click to remove", "Learn React", "Write Code", "Ship App"]
};

// The types of actions that you can dispatch to modify the state of the store
export const types = {
  ADD: "ADD",
  REMOVE: "REMOVE"
};

// Helper functions to dispatch actions, optionally with payloads
export const actionCreators = {
  add: item => {
    return { type: types.ADD, payload: item };
  },
  remove: index => {
    return { type: types.REMOVE, payload: index };
  }
};

export const reducer = (state = initialState, action) => {
  const { todos } = state;
  const { type, payload } = action;

  switch (type) {

    case REHYDRATE: {

      return {
        ...state,
      }
    }
    case types.ADD: {
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
  }

  return state;
};