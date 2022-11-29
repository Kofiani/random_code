import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Menu from './components/Menu';
import data from './data/data.json';

const Root = document.getElementById('root');
const root = createRoot(Root);
root.render(
  <StrictMode>
    <Menu recipes={data} />
  </StrictMode>
);
