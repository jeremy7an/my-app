import React from 'react';
import { BrowserRouter} from 'react-router-dom';

import { CommonRoutes } from './Routes';

function App() {
  return (
  <BrowserRouter>
   <CommonRoutes />
  </BrowserRouter>
  );
}

export default App;
