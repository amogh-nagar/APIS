import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import ProductItem from "./pages/ProductItem";
import Products from "./pages/Products";
import Header from "./components/Header";
import NewProduct from "./pages/NewProduct";
function App() {
  return (
    <>
      <Header />
      <main>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/products" exact>
          <Products />
        </Route>
        <Route path="/products/:pid">
          <ProductItem />
        </Route>
        <Route path="/new">
          <NewProduct/>
          </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
      </main>
    </>
  );
}

export default App;
