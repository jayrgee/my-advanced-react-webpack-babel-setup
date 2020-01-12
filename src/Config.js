import React from 'react';
import axios from 'axios';

const defaultConfig = { foo: 'bar', title: 'here be the default title' };

const getConfig = async cb => {
  try {
    const response = await axios.get('config.json');
    const { data } = response;
    const config = { ...defaultConfig, ...data };
    cb(config);
  } catch (error) {
    cb(defaultConfig);
  }
};

const ConfigContext = React.createContext(null);

export { getConfig, ConfigContext };
