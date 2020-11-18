import {
  ADD, ADD_NUMBER, CLEAR_TOTAL, SUB,
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
