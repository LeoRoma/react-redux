import * as types from "../actions/actionTypes";

// With default keyword we can call with any name when we import
export default function authorReducer(state = [], action) {
  switch (action.type) {
    case types.LOAD_AUTHORS_SUCCESS:
      return action.authors;
    default:
      return state;
  }
}
