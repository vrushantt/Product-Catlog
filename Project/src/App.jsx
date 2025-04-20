import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Products from "./Components/Products";
import Navbar from "./Components/Navbar";
import React from "react";

function App() {
  const [cart, setcart] = React.useState(false);
  const handlecart = () => {
    setcart(!cart);
  };
  return (
    <>
      <Navbar cart={cart} handlecart={handlecart} />
      <Products cart={cart} />
    </>
  );
}

export default App;
