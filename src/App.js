import React, { useContext } from 'react';

import { ConfigContext } from './Config';

const App = () => {
  const { title } = useContext(ConfigContext);
  return <div>{title}</div>;
};

export default App;
