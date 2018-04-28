import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { movieActions } from '../actions';

class Movies extends Component {
	constructor(props) {
		super(props);
		this.props.getMovies();
	}

	render() {
		const { movies } = this.props;
		return (
			<div className="container">
				<ul>
					{movies.map((movie, index) => {
						return (<li key={index}>{movie}</li>)
					})}
				</ul>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		movies: state.movie.movies,
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		getMovies: movieActions.getMovies,
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies);