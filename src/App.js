import React from 'react';
import { BrowserRouter, Route, Redirect } from "react-router-dom";

import WordKeeper from './components/WordKeeper/WordKeeper';


function App() {
  return (
    <BrowserRouter>
      <div>
        
        <Redirect from="/" to="/palabras" />
        <Route path="/palabras" component={WordKeeper} />
      </div>
    </BrowserRouter>
  );
}

export default App;
