import { CLEAR_TOTAL } from '../actions/actionTypes';

const initialState = {
  totalTraining: 10,
  approachesDone: 30,
  repsDone: 300,
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
      };
    default:
      break;
  }
  return state;
}

export default totalInfo;
