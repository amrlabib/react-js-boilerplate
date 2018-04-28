import { MovieTypes } from '../actionTypes';

function getMovies() {
	return {
		type: MovieTypes.MOVIES_GET,
		payload: ['movie 1' , 'movie 2'],
	};
}


export default {
	getMovies,
}