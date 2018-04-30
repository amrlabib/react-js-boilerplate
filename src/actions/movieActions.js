import { MovieTypes } from '../actionTypes';
import { movieApi } from '../api/';

/* Get Movies */

function getMovies() {
  return {
    type: MovieTypes.MOVIES_GET,
  };
}

function getMoviesSuccess(movies) {
  return {
    type: MovieTypes.MOVIES_GET_SUCCESS,
    movies,
  };
}

function getMoviesFailure(message) {
  return {
    type: MovieTypes.MOVIES_GET_FAILURE,
    message,
  };
}

function getMoviesThunk() {
  return (dispatch) => {
    dispatch(getMovies());

    movieApi.getMovies()
      .then((data) => {
        // setTimeout to show loading state just for testing
        setTimeout(() => {
          dispatch(getMoviesSuccess(data));
        }, 1000);
      })
      .catch((error) => {
        dispatch(getMoviesFailure(error.message));
      });
  };
}

export default {
  getMovies: getMoviesThunk,
};
