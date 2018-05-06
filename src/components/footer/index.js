// @flow

import React from 'react';
import CSSModules from 'react-css-modules';
import star from '../../../assets/icons/star.svg';
// $FlowFixMe
import style from './footer.scss';

const Footer = () => (
  <div className="container-fluid" styleName="container">
    <div className="row justify-content-center">
      <div className="col d-flex justify-content-center align-items-center" styleName="text">
        <svg styleName="star"><use xlinkHref={(star: any).url} /></svg>
        <span>Footer</span>
        <svg styleName="star"><use xlinkHref={(star: any).url} /></svg>
      </div>
    </div>
  </div>
);

export default CSSModules(Footer, style);
