import { takeEvery, put, call } from 'redux-saga/effects';
import { getMainInfo } from './actions/actions';
import { GET_MAIN_INFO, REQUEST_MAIN_INFO } from './actions/actionTypes';

export function* sagaWatcher() {
  yield takeEvery(REQUEST_MAIN_INFO, mainInfoWorker);
}

function* mainInfoWorker() {
  const payload = yield call(getStatsInf);
  yield put(getMainInfo({ type: GET_MAIN_INFO, payload }));
}

async function getStatsInf() {
  const res = await fetch('http://localhost:3000/stats');
  return await res.json();
}
