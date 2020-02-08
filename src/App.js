import React from 'react';

import { useConfig } from './Config';

const App = () => {
  const { title } = useConfig();
  return <div>{title}</div>;
};

export default App;
