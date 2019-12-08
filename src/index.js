import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import packageJson from '../package.json';

global.appVersion = packageJson.version;

const title = 'React with Webpack and Babel';

ReactDOM.render(
  <App title={title} />,
  document.getElementById('app')
);

module.hot.accept();
