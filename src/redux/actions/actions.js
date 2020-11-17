import { ADD, ADD_NUMBER, SUB } from './actionTypes';

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
