import React from 'react';
import colorData from '../data/color-data.json';
import ColorList from './ColorLists';

const App = () => {
  const [colors] = useState(colorData);
  return <ColorList colors={colors} />;
};

export default App;
