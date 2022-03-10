import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";

const Cart = () => {
  const test = useContext(CartContext);
  const onAdd = () => {
    console.log("Aprete en on add dentro de cart");
  };

  return (
    <>
      {test.cartList.length !== 0 ? (
        <>
          <h1>{`CART - TOTAL PRICE $${test.cartTotalPrice()}`}</h1>

          {test.cartList.map((item, key) => {
            return (
              <>
                <h1>__________</h1>
                <h1>{item.name}</h1>
                
                <h3>{`Cantidad: ${item.qtyInCart} / $${item.cost} c/u`}</h3>
                <h4>{`$ ${item.qtyInCart * item.cost}`}</h4>
                {/* <ItemCount stock={item.qtyInCart} onAdd={onAdd} /> */}
                <button
                  className='btn btn-primary'
                  onClick={() => test.removeItem(item.id)}
                >
                  {" "}
                  REMOVE ITEM
                </button>
              </>
            );
          })}

        
          <h1>________</h1>
          <button className='btn btn-primary' onClick={test.removeItems}>
            {" "}
            REMOVE ITEMS
          </button>
        </>
      ) : (
        <h1>SIN PRODUCTOS</h1>
      )}
    </>
  );
};

export default Cart;
