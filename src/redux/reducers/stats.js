import { GET_STATS_INFO } from '../actions/actionTypes';

const initialState = {
};

function statsInfo(state = initialState, action) {
  switch (action.type) {
    case GET_STATS_INFO:
      console.log(action.value);
      return action.value.data;
    default:
      break;
  }
  return state;
}

export default statsInfo;
