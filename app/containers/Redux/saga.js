import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchUserFailureAction, fetchUserSuccessAction } from './actions';
import { callPlayerAPI } from './api';
import { FETCH_USER } from './constants';

// Individual exports for testing
function* reduxSaga() {
  try {
    const response = yield call(callPlayerAPI);
    console.log('API RESPONSE: ', response);
    // const { data } = response;
    // console.log("API DATA: ", data);
    yield put(fetchUserSuccessAction(response));
  } catch (error) {
    yield put(fetchUserFailureAction(error));
  }
}

export function* watchFetchUser() {
  yield takeLatest(FETCH_USER, reduxSaga);
}
