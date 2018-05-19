// @flow

import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { movieActions } from '../../actions';
import style from './movies.scss';

type PropsType = {
  getMovies: Function,
  movies: Array<Object>,
  message: string,
  isLoading: boolean,
};

class Movies extends Component<PropsType> {
  constructor(props) {
    super(props);
    this.props.getMovies();
  }

  renderMovies() {
    return this.props.movies.map((movie, index) => (<li key={index}>{movie.name}</li>));
  }

  render() {
    const { message, isLoading } = this.props;
    return (
      <div className="container">
        {isLoading ? <span>Loading...</span> : null }
        <span styleName="error-message">{message}</span>
        <ul>
          {!isLoading && message.length === 0 && this.renderMovies()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.movie.movies,
    message: state.movie.message,
    isLoading: state.movie.isLoading,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getMovies: movieActions.getMovies,
  }, dispatch);
}

const MoviesWithCss = CSSModules(Movies, style);

export default connect(mapStateToProps, mapDispatchToProps)(MoviesWithCss);
