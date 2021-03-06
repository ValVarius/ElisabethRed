import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
    <div className="App container-fluid">
      
        <Header />

        <Switch>
          <Route exact path="/ElisabethRed/">
            <Home />
          </Route>
        </Switch>
        </div>
      </Router>
    
  );
}

export default App;
