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
  GET_FORTH_LIST_FAILED, SUBMIT_DATA_REQUEST, SUBMIT_DATA_SUCCESS, SUBMIT_DATA_FAILED
} from "../constants";

const INIT_STATE = {
  isLoading: false,
  firstList: [],
  secondList: [],
  thirdList: [],
  forthList: [],
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_FIRST_LIST_REQUEST:
      return {...state, isLoading: true};
    case GET_FIRST_LIST_SUCCESS:
      return {...state, firstList: action.payload, isLoading: false};
    case GET_FIRST_LIST_FAILED:
      return {...state, isLoading: false};

    case GET_SECOND_LIST_REQUEST:
      return {...state, isLoading: true};
    case GET_SECOND_LIST_SUCCESS:
      return {...state, secondList: action.payload, isLoading: false};
    case GET_SECOND_LIST_FAILED:
      return {...state, isLoading: false};

    case GET_THIRD_LIST_REQUEST:
      return {...state, isLoading: true};
    case GET_THIRD_LIST_SUCCESS:
      return {...state, thirdList: action.payload, isLoading: false};
    case GET_THIRD_LIST_FAILED:
      return {...state, isLoading: false};

    case GET_FORTH_LIST_REQUEST:
      return {...state, isLoading: true};
    case GET_FORTH_LIST_SUCCESS:
      return {...state, forthList: action.payload, isLoading: false};
    case GET_FORTH_LIST_FAILED:
      return {...state, isLoading: false};

    case SUBMIT_DATA_REQUEST:
      return {...state, isLoading: true};
    case SUBMIT_DATA_SUCCESS:
      return {...state, isLoading: false};
    case SUBMIT_DATA_FAILED:
      return {...state, isLoading: false};

    default:
      return {...state};
  }
};
