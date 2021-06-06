import React from "react";
import "./App.css";
import { MovieContainer, MovieLanding } from "./export";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const MoviesContext = React.createContext();

function App() {
  const data = require("./data/source.json");
  return (
    <Router>
      <div className="main">
        <MoviesContext.Provider value={data}>
          <Switch>
            <Route path="/movie" component={MovieLanding} />
            <Route path="/" exact component={MovieContainer} />
          </Switch>
        </MoviesContext.Provider>
      </div>
    </Router>
  );
}

export default App;
