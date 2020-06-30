import React from "react";
import Main from "./components/Main";
import Nav from "./components/Nav";
import Thank from "./components/Thank";
import NotFound from "./components/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/thank" exact component={Thank} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
