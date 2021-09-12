import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./Components/Navigation";
import AddProductPage from "./Pages/AddProductPage";

import HomePage from "./Pages/HomePage";
import ProductsPage from "./Pages/ProductsPage";
import ProductPage from "./Pages/ProductPage";

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/home" exact component={HomePage} />
        <Route path="/" exact component={HomePage} />
        <Route path="/products" exact component={ProductsPage} />
        <Route path="/product/add" exact component={AddProductPage} />
        <Route path="/product/:id" exact children={<ProductPage />} />
      </Switch>
    </Router>
  );
}

export default App;
