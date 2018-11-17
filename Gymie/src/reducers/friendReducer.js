const INITIAL_STATE = { friends: [] }
import * as actionTypes from '../actions';

export default (state = INITIAL_STATE, action) => {
  const { friends } = state;
  const { type, payload } = action;

  switch (action.type) {
    case actionTypes.ADD:
      return { ...state, friends: [payload, ...friends]
      }
    default:
      return state
  }
}

export const getFriends = (state) => ({
  friends: state.friends
})