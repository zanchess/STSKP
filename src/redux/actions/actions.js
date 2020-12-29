import axios from 'axios';
import {
  ADD, ADD_NUMBER, CLEAR_TOTAL, SUB, GET_MAIN_INFO,
} from './actionTypes';

export function add() {
  return {
    type: ADD,
  };
}

export function sub() {
  return {
    type: SUB,
  };
}

export function addNum(number) {
  return {
    type: ADD_NUMBER,
    value: number,
  };
}

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
