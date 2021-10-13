import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <h1>HELO CHACKOT</h1>
          </Route>
          <Route path="/login">
            <h1>HELo LOGUT</h1>
          </Route>
          <Route path="/">
            <Header />
            <h1>HELO HUM</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
