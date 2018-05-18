// @flow

import { Request } from '../utils';


const movieApi = {
  getMovies() {
    return Request.get('/movies');
  },
};


export default movieApi;
