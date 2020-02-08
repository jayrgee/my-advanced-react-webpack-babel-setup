import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const ConfigContext = React.createContext(null);

export function ConfigProvider({ config, children }) {
  return (
    <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>
  );
}
ConfigProvider.propTypes = {
  config: PropTypes.objectOf(PropTypes.any).isRequired,
  children: PropTypes.node.isRequired,
};

export const fetchConfig = async (defaultConfig = {}) => {
  try {
    const response = await axios.get('config.json');
    const { data } = response;
    return { ...defaultConfig, ...data };
  } catch (error) {
    return defaultConfig;
  }
};

export const useConfig = () => useContext(ConfigContext);
