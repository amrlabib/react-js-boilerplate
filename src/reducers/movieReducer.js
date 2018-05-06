// @flow

import { MovieTypes } from '../actionTypes';

const INITIAL_STATE = {
  movies: [],
  message: '',
  isLoading: false,
};

export default function (state: Object = INITIAL_STATE, action: Object) {
  switch (action.type) {
    case MovieTypes.MOVIES_GET:
      return {
        ...state,
        isLoading: true,
        message: '',
      };
    case MovieTypes.MOVIES_GET_SUCCESS:
      return {
        ...state,
        isLoading: false,
        movies: action.movies,
      };
    case MovieTypes.MOVIES_GET_FAILURE:
      return {
        ...state,
        isLoading: false,
        message: action.message,
      };
    default:
      return state;
  }
}
