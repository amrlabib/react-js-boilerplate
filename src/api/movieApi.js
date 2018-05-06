// @flow

import { Request } from '../services';


const movieApi = {
  getMovies() {
    return Request.get('/movies');
  },
};


export default movieApi;
