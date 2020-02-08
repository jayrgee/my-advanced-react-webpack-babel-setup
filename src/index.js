import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { ConfigProvider, fetchConfig } from './Config';

import packageJson from '../package.json';

global.appVersion = packageJson.version;

fetchConfig({ title: 'default title' }).then(config => {
  ReactDOM.render(
    <ConfigProvider config={config}>
      <App />
    </ConfigProvider>,
    document.getElementById('app')
  );
});

if (module.hot) module.hot.accept();
