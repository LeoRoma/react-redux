export function createCourse(course) {
  return { type: "CREATE_COURSE", course }; // Type property specify type of the action
}
