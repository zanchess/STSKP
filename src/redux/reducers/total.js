import { CLEAR_TOTAL, GET_MAIN_INFO } from '../actions/actionTypes';

const initialState = {
  totalTraining: 10,
  approachesDone: 30,
  repsDone: 300,
  lastTraining: 0,
  lastApproaches: 0,
  lastReps: 0,
  favoriteExercise: 'Push Up',

};

function totalInfo(state = initialState, action) {
  switch (action.type) {
    case CLEAR_TOTAL:
      return {
        totalTraining: 0,
        approachesDone: 0,
        repsDone: 0,
        favoriteExercise: 'chair',
        lastTraining: 0,
        lastApproaches: 0,
        lastReps: 0,
      };
    case GET_MAIN_INFO:
      console.log(action.value);
    default:
      break;
  }
  return state;
}

export default totalInfo;
