import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Products from "./components/Products";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <Products />
      <Cart />
    </div>
  );
}

export default App;
