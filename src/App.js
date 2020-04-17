import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import WordKeeper from './components/WordKeeper/WordKeeper';


function App() {
  return (
    <BrowserRouter>
      <div>
        <WordKeeper />
      </div>
    </BrowserRouter>
  );
}

export default App;
