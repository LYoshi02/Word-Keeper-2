import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./store/actions/index";

import Auth from "./containers/Auth/Auth";
import WordKeeper from './components/WordKeeper/WordKeeper';

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFolderOpen, faUser, faRunning, faGrinWink, faBoxes, faSearch,
  faTrash, faPen, faPlus, faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
library.add(faFolderOpen, faUser, faRunning, faGrinWink, faBoxes, faSearch,
  faTrash, faPen, faPlus, faCheckCircle, faSignOutAlt);

class App extends Component {
  componentDidMount() {
    this.props.onCheckAuthState();
  }

  render() {
    let routes = (
      <Switch>
        <Route path={["/signin", "/signup"]} component={Auth} />
        <Redirect to="/signin" />
      </Switch>
    );

    if (this.props.isAuth) {
      routes = (
        <Switch>
          <Route path="/palabras" component={WordKeeper} />
          <Redirect to="/palabras" />
        </Switch>
      );
    }

    return (
      <BrowserRouter>
        <div>
          {routes}
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuth: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onCheckAuthState: () => dispatch(actions.checkAuthState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);