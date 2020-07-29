import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import UserList from "./pages/UserList";
import UserDetail from "./pages/UserDetail";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/users" component={UserList} exact />
        <Route path="/users/:id" component={UserDetail} />
        <Redirect to="/users" />
      </Switch>
    </Router>
  );
}

export default App;
