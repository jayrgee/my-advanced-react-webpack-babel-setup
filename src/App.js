import React from 'react';

import { useConfig } from './components/ConfigProvider';

const App = () => {
  const { title } = useConfig();
  return <div>{title}</div>;
};

export default App;
