import { combineReducers } from 'redux';
import movieReducer from './movieReducer.js';

const rootReducer = combineReducers({
	movie: movieReducer,
});

export default rootReducer;
