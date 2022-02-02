// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import NavBar from "./components/navBar.js";
import ItemsListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";

import ItemDetailContainer from "./components/ItemDetailContainer"
// const style = {
//   paddingRight: "10px",
// };

function App() {
  return (
    // <React.Fragment>
    <>
      <NavBar />
      <ItemDetailContainer />
      <ItemsListContainer greeting='Hola! Aquí veremos la lista de items' />
    {/* <ItemCount /> */}
    
    </>

    // </React.Fragment>
  );
}

export default App;
