import * as types from './actionTypes';


export const add = item => {
  return { type: types.ADD, item };
}

// export const remove = index => {
//   return { type: types.REMOVE, payload: index };
// }
