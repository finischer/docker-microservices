import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import AddProductPage from "./pages/AddProductPage";

import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductPage from "./pages/ProductPage";
import MoviesPage from "./pages/MoviesPage";
import FilmPage from "./pages/FilmPage";
import AddFilmPage from "./pages/AddFilmPage";

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
        <Route path="/movies" exact component={MoviesPage} />
        <Route path="/film/add" exact component={AddFilmPage} />
        <Route path="/film/:id" exact children={<FilmPage />} />
      </Switch>
    </Router>
  );
}

export default App;
