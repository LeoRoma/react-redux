// With default keyword we can call with any name when we import
export default function courseReducer(state = [], action) {
  switch (action.type) {
    case "CREATE_COURSE":
      return [...state, { ...action.course }];
    default:
      return state;
  }
}

// Reducer pass as arguments state and action
