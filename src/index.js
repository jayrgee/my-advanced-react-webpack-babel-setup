import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { ConfigContext, getConfig } from './Config';

import packageJson from '../package.json';

global.appVersion = packageJson.version;

ReactDOM.render(
  <ConfigContext.Provider value={getConfig()}>
    <App />
  </ConfigContext.Provider>,
  document.getElementById('app')
);

if (module.hot) module.hot.accept();
