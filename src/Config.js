import React from 'react';
import axios from 'axios';

const defaultConfig = { foo: 'bar', title: 'here be the default title' };

const getConfig = async () => {
  try {
    const response = await axios.get('config.json');
    const { data } = response;
    return { ...defaultConfig, ...data };
  } catch (error) {
    return defaultConfig;
  }
};

const ConfigContext = React.createContext(null);

export { getConfig, ConfigContext };
