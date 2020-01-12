import React from 'react';

const ConfigContext = React.createContext(null);

const getConfig = () => ({ foo: 'bar', title: 'here be the title' });

export { getConfig, ConfigContext };
