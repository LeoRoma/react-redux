import * as types from "./actionTypes";

export function createCourse(course) {
  return { type: types.CREATE_COURSE, course }; // Type property specify type of the action
}
