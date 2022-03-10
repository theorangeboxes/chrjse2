import { Button } from "@mui/material";
import { serverTimestamp , doc, updateDoc, increment } from "firebase/firestore";
import { db } from "../utils/firebaseConfig";
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
// import ItemCount from "./ItemCount";
import { createOrderFirestore } from "../utils/firestoreFetch";

const Cart = () => {
  const accesoCartContext = useContext(CartContext);

  const createOrder = (e) => {
    e.stopPropagation();

    let order = {
      buyer: {
        name: "james Rodriguez",
        phone: "080011111111",
        email: "lalala@gmail.com",
      },
      items: accesoCartContext.cartList.map((i) => ({
        id: i.id,
        price: i.cost,
        title: i.name,
        quantity: i.qtyInCart,
      })),
      date: serverTimestamp(),
      total: accesoCartContext.cartTotalPrice(),
    };
    console.log("Click CHECOUT NOW :", order);

    createOrderFirestore(order)
      .then((result) => alert(`Orden Creada: ${result.id}`))
      .catch((err) => console.log(err));

      
      
      
      accesoCartContext.cartList.forEach(async (item) => {
        console.log('Item dentro de recorrido de carList para decrementar: ',item)
        const itemRef = doc(db, "products", `${item.idFS}`);
        await updateDoc(itemRef, {
          stock: increment(-item.qtyInCart),
        });
      });
      accesoCartContext.removeItems();
    };

  return (
    <>
      {accesoCartContext.cartList.length !== 0 ? (
        <>
          <h1>{`CART - TOTAL PRICE $${accesoCartContext.cartTotalPrice()}`}</h1>
          <Button onClick={createOrder} variant='outlined'>
            CHECKOUT NOW
          </Button>

          {accesoCartContext.cartList.map((item, key) => {
            return (
              <>
                <h1>__________</h1>
                <h1>{item.name}</h1>

                <h3>{`Cantidad: ${item.qtyInCart} / $${item.cost} c/u`}</h3>
                <h4>{`$ ${item.qtyInCart * item.cost}`}</h4>

                <button
                  className='btn btn-primary'
                  onClick={() => accesoCartContext.removeItem(item.id)}
                >
                  {" "}
                  REMOVE ITEM
                </button>
              </>
            );
          })}

          <h1>________</h1>
          <button
            className='btn btn-primary'
            onClick={accesoCartContext.removeItems}
          >
            {" "}
            REMOVE ITEMS
          </button>
        </>
      ) : (
        <h1 className='d-flex flex-column text-center'>SIN PRODUCTOS</h1>
      )}
    </>
  );
};

export default Cart;
