import * as types from "../actions/actionTypes";
import initialState from "./initialState";

// With default keyword we can call with any name when we import
export default function authorReducer(state = initialState.authors, action) {
  switch (action.type) {
    case types.LOAD_AUTHORS_SUCCESS:
      return action.authors;
    default:
      return state;
  }
}
