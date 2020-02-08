import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { fetchConfig } from './fetchConfig';

const ConfigContext = React.createContext(null);

export default function ConfigProvider({ config, children }) {
  return (
    <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>
  );
}
ConfigProvider.propTypes = {
  config: PropTypes.objectOf(PropTypes.any).isRequired,
  children: PropTypes.node.isRequired,
};

const useConfig = () => useContext(ConfigContext);

export { fetchConfig, useConfig };
