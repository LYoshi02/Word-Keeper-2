import React from 'react';
import { BrowserRouter, Route, Redirect } from "react-router-dom";

import WordKeeper from './containers/WordKeeper/WordKeeper';


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
