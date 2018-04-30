import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import style from './body.scss';


const Body = ({ children }) => (
  <div styleName="container">
    {children}
  </div>
);

Body.propTypes = {
  children: PropTypes.element.isRequired,
};

export default CSSModules(Body, style);
