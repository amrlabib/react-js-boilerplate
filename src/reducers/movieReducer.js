import { MovieTypes } from '../actionTypes';

const INITIAL_STATE = {
	movies: [],
};

export default function(state = INITIAL_STATE, action ) {
	switch(action.type) {
		case MovieTypes.MOVIES_GET:
			return {
				...state,
				movies: action.payload,
			}
		default:
			return state;
	}
}