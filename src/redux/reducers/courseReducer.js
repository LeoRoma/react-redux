import * as types from "../actions/actionTypes";
import initialState from "./initialState";

// With default keyword we can call with any name when we import
export default function courseReducer(state = initialState.courses, action) {
  switch (action.type) {
    case types.CREATE_COURSE:
      return [...state, { ...action.course }];
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;
    default:
      return state;
  }
}

// Reducer pass as arguments state and action
