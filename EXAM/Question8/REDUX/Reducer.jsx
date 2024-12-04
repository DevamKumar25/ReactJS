import { INCREMENT, DECREMENT } from './Action';

//reducer = function that specify how state changes in response to actions


// Initial state of the Redux store
const initialState = {
  counter: 0,
};

// Reducer function to handle actions and update the state
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case DECREMENT:
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};

export default counterReducer;
