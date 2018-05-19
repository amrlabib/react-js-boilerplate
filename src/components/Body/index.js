// @flow

import * as React from 'react';
import CSSModules from 'react-css-modules';
import style from './body.scss';

type PropsType = {
  children: React.Node,
};

const Body = ({ children }: PropsType) => (
  <div styleName="container">
    {children}
  </div>
);

export default CSSModules(Body, style);
