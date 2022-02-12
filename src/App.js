import "./App.css";
import React from "react";
import Home from "./pages/Home";
// import CartContextProvider, { CartContext } from "./context/CartContext";
import CartContextProvider from "./context/CartContext";

function App() {
  return (
    <CartContextProvider>
      <Home />
    </CartContextProvider>
    // <CartContext.Provider value={[1, 2, 3]}>
    // <Home />
    // </CartContext.Provider>
  );
}

export default App;
