// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import NavBar from "./components/navBar.js";
import ItemsListContainer from "./components/ItemListContainer";
import Cart from "./components/Cart";

import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// const style = {
//   paddingRight: "10px",
// };

function App() {
  return (
    // <React.Fragment>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemsListContainer />} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
        <Route path='/category/:idCategory' element={<ItemsListContainer />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </BrowserRouter>

    // </React.Fragment>
  );
}

export default App;
