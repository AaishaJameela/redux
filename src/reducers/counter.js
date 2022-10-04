const initialState = 0;

const counter = (state = initialState, action) => {
  switch (action.type) {
    case "counter/Increment":
      return state + 1;
    case "counter/Decrement":
      return state - 1;
    default:
      return state;
  }
};

export default counter;
