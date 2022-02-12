import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const test = useContext(CartContext);
  return (
    <>
      <h1>CART</h1>
      {test.cartList.map((item,key) => {
        return (
          <>
          <h1>__________</h1>
            <h1>{item.name}</h1>
            <h2>{item.details}</h2>
            <h3>{`Cantidad: ${item.qtyInCart}`}</h3>
            <button className="btn btn-primary" onClick={() => test.removeItem(item.id)}> REMOVE ITEM</button>
          </>
        );
      })}

      {/* <h2>{test.cartList[0]}</h2>

      <h2>{test.cartList[1]}</h2> */}
      <h1>________</h1>
      <button className="btn btn-primary" onClick={test.removeItems}> REMOVE ITEMS</button>
      
      
    </>
  );
};

export default Cart;
