import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import ProductsPage from "./Pages/ProductsPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home" exact component={HomePage} />
        <Route path="/products" exact component={ProductsPage} />
        {/* <Route path="/product/:id" exact component={} /> */}
      </Switch>
    </Router>
  );
}

export default App;
