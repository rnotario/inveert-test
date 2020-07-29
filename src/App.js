import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import UserList from "./pages/UserList";
import UserDetail from "./pages/UserDetail";

import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Route path="/" component={UserList} exact />
      <Route path="/users/:id" component={UserDetail} />
    </Router>
  );
}

export default App;
