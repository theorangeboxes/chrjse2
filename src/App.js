// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import NavBar from "./components/navBar.js";
import ItemsListContainer from "./components/ItemListContainer";

// const style = {
//   paddingRight: "10px",
// };

function App() {
  return (
    // <React.Fragment>
    <>
      <NavBar />
      <ItemsListContainer greeting='Hola! Aquí veremos la lista de items' />
    </>

    // </React.Fragment>
  );
}

export default App;
