import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import queryString from 'query-string';

import {
  getFirstListSuccess,
  getFirstListFailed,
  getSecondListSuccess,
  getSecondListFailed,
  getThirdListSuccess,
  getThirdListFailed,
  getForthListSuccess,
  getForthListFailed, submitDataSuccess, submitDataFailed
} from "./actions";
import { getDataAsync, postDataAsync } from "../api";
import {
  GET_FIRST_LIST_REQUEST,
  GET_FORTH_LIST_REQUEST,
  GET_SECOND_LIST_REQUEST,
  GET_THIRD_LIST_REQUEST, SUBMIT_DATA_REQUEST
} from "../constants";

function* getFirstList() {
  try {
    const list = yield call(getDataAsync, 'http://demo0178584.mockable.io/first_dropdown');
    if (list) {
      yield put(getFirstListSuccess(list));
    } else {
      yield put(getFirstListFailed());
    }
  } catch (error) {
    console.log('loading error : ', error);
  }
}

export function* watchGetFirstList() {
  yield takeEvery(GET_FIRST_LIST_REQUEST, getFirstList);
}

function* getSecondList(data) {
  try {
    const list = yield call(getDataAsync, `http://demo0178584.mockable.io/second_dropdown?${queryString.stringify(data.params)}`);
    if (list) {
      yield put(getSecondListSuccess(list));
    } else {
      yield put(getSecondListFailed());
    }
  } catch (error) {
    console.log('loading error : ', error);
  }
}

export function* watchGetSecondList() {
  yield takeEvery(GET_SECOND_LIST_REQUEST, getSecondList);
}

function* getThirdList(data) {
  try {
    const list = yield call(getDataAsync, `http://demo0178584.mockable.io/third_dropdown?${queryString.stringify(data.params)}`);
    if (list) {
      yield put(getThirdListSuccess(list));
    } else {
      yield put(getThirdListFailed());
    }
  } catch (error) {
    console.log('loading error : ', error);
  }
}

export function* watchGetThirdList() {
  yield takeEvery(GET_THIRD_LIST_REQUEST, getThirdList);
}

function* getForthList(data) {
  try {
    const list = yield call(getDataAsync, `http://demo0178584.mockable.io/forth_dropdown?${queryString.stringify(data.params)}`);
    if (list) {
      yield put(getForthListSuccess(list));
    } else {
      yield put(getForthListFailed());
    }
  } catch (error) {
    console.log('loading error : ', error);
  }
}

export function* watchGetForthList() {
  yield takeEvery(GET_FORTH_LIST_REQUEST, getForthList);
}

function* submitData(request) {
  try {
    const response = yield call(postDataAsync, 'http://demo0178584.mockable.io/final', request.data);
    if (response) {
      yield put(submitDataSuccess(response));
      console.log(response);
    } else {
      yield put(submitDataFailed());
    }
  } catch (error) {
    console.log('loading error : ', error);
  }
}

export function* watchSubmitData() {
  yield takeEvery(SUBMIT_DATA_REQUEST, submitData);
}

export default function* commonSaga() {
  yield all([
    fork(watchGetFirstList),
    fork(watchGetSecondList),
    fork(watchGetThirdList),
    fork(watchGetForthList),
    fork(watchSubmitData)
  ]);
}
