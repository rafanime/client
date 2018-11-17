import { combineReducers } from "redux";
import todo, * as todos from "./myReducer";
import friendReducer, * as friends from "./friendReducer";

export default combineReducers({
  todo,
  friendReducer
});