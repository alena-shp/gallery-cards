import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// eslint-disable-next-line
import { Provider } from "react-redux";

import * as serviceWorker from './serviceWorker';

// import Home from "./app/Home/index.js";
// import Profile from "./app/Profile/index.js";
import Event from "./app/Event";

// Material UI Theme
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import MuiTheme from "./utils/muiTheme";

import "./scss/global-style.css";

ReactDOM.render(
  <Router>
    <MuiThemeProvider muiTheme={MuiTheme}>
      <Switch>
        <Route exact path="/" component={props => <Event {...props} />} />
      </Switch>
    </MuiThemeProvider>
  </Router>,
  document.getElementById("root"));
serviceWorker.unregister();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
