import {
  GET_FIRST_LIST_REQUEST,
  GET_FIRST_LIST_SUCCESS,
  GET_FIRST_LIST_FAILED,
  GET_SECOND_LIST_REQUEST,
  GET_SECOND_LIST_SUCCESS,
  GET_SECOND_LIST_FAILED,
  GET_THIRD_LIST_REQUEST,
  GET_THIRD_LIST_SUCCESS,
  GET_THIRD_LIST_FAILED,
  GET_FORTH_LIST_REQUEST,
  GET_FORTH_LIST_SUCCESS,
  GET_FORTH_LIST_FAILED,
  SUBMIT_DATA_REQUEST,
  SUBMIT_DATA_SUCCESS,
  SUBMIT_DATA_FAILED
} from '../constants';

export const getFirstList = (params) => ({
  type: GET_FIRST_LIST_REQUEST,
  params
});

export const getFirstListSuccess = (payload) => ({
  type: GET_FIRST_LIST_SUCCESS,
  payload
});

export const getFirstListFailed = () => ({
  type: GET_FIRST_LIST_FAILED
});

export const getSecondList = (params) => ({
  type: GET_SECOND_LIST_REQUEST,
  params
});

export const getSecondListSuccess = (payload) => ({
  type: GET_SECOND_LIST_SUCCESS,
  payload
});

export const getSecondListFailed = () => ({
  type: GET_SECOND_LIST_FAILED
});

export const getThirdList = (params) => ({
  type: GET_THIRD_LIST_REQUEST,
  params
});

export const getThirdListSuccess = (payload) => ({
  type: GET_THIRD_LIST_SUCCESS,
  payload
});

export const getThirdListFailed = () => ({
  type: GET_THIRD_LIST_FAILED
});

export const getForthList = (params) => ({
  type: GET_FORTH_LIST_REQUEST,
  params
});

export const getForthListSuccess = (payload) => ({
  type: GET_FORTH_LIST_SUCCESS,
  payload
});

export const getForthListFailed = () => ({
  type: GET_FORTH_LIST_FAILED
});

export const submitData = (data) => ({
  type: SUBMIT_DATA_REQUEST,
  data
});

export const submitDataSuccess = () => ({
  type: SUBMIT_DATA_SUCCESS
});

export const submitDataFailed = () => ({
  type: SUBMIT_DATA_FAILED
});


