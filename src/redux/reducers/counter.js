import { ADD, ADD_NUMBER, SUB } from '../actions/actionTypes';

const initialState = {
  counter: 10,
};

function counter(state = initialState, action) {
  switch (action.type) {
    case ADD:
      return {
        counter: state.counter + 1,
      };
    case SUB:
      return {
        counter: state.counter - 1,
      };
    case ADD_NUMBER:
      return {
        counter: state.counter + action.value,
      };

    default:
      break;
  }
  return state;
}

export default counter;
