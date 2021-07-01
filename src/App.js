import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Logout from "./components/Logout";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Weatherpage from "./components/Weatherpage";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <div>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/Login">
              <Login />
            </Route>
            <Route path="/Logout">
              <Logout />
            </Route>
            <Route path="/Dashboard">
              <Dashboard />
            </Route>
            <Route path="/Weather">
              <Weatherpage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;