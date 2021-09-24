import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchUserFailureAction, fetchUserSuccessAction } from './actions';
import { callPlayerAPI } from './api';
import { FETCH_USER } from './constants';

// Individual exports for testing
function* reduxSaga() {
  try {
    console.log('Hello');
    const response = yield call(callPlayerAPI);
    console.log(response);
    const { data } = response;
    yield put(fetchUserSuccessAction(data));
  } catch (error) {
    yield put(fetchUserFailureAction(error));
  }
}

export function* watchFetchUser() {
  yield takeLatest(FETCH_USER, reduxSaga);
  console.log('Test');
}
