import axios from 'axios';
import {
  CLEAR_TOTAL, GET_MAIN_INFO, GET_STATS_INFO,
} from './actionTypes';

export function clearTotal() {
  return {
    type: CLEAR_TOTAL,
  };
}

export const getMainInfo = () => (dispatch) => {
  axios
    .get('http://localhost:3000/posts')
    .then((res) => {
      dispatch({ type: GET_MAIN_INFO, value: res });
    });
};

export const getStatsInfo = () => (dispatch) => {
  axios
    .get('http://localhost:3000/stats')
    .then((res) => {
      console.log(res);
      dispatch({ type: GET_STATS_INFO, value: res });
    });
};
