import React from 'react';
import { BrowserRouter, Route, Redirect } from "react-router-dom";

import Auth from "./containers/Auth/Auth";
import WordKeeper from './components/WordKeeper/WordKeeper';

import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faFolderOpen, faUser, faRunning, faGrinWink, faBoxes, faSearch,
    faTrash, faPen, faPlus
} from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
library.add(faFolderOpen, faUser, faRunning, faGrinWink, faBoxes, faSearch,
    faTrash, faPen, faPlus, faCheckCircle);

function App() {
  return (
    <BrowserRouter>
      <div>
        
        {/* <Redirect from="/" to="/signin" /> */}
        <Route path="/palabras" component={WordKeeper} />
        <Route path={["/signin", "/signup"]} component={Auth} />
      </div>
    </BrowserRouter>
  );
}

export default App;
