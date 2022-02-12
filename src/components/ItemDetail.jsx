import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
  const test = useContext(CartContext);
  const [quantityToAdd, setQuantityToAdd] = useState(0);

  const onAdd = (_quantityToAdd) => {
    setQuantityToAdd(_quantityToAdd);
    test.addToCart(item,_quantityToAdd);
  };

  useEffect(() => {
    console.log(
      "Cantidad de productos a agregar al carrito (dentro de itemDetails): ",
      quantityToAdd
    );
  }, [quantityToAdd]);

  return (
    <>
      <div className='container-fluid'>
        <div className='d-flex flex-wrap justify-content-center'>
          <div className='d-flex' style={{ width: "600px" }}>
            <img
              src={item.urlImg}
              className='rounded'
              style={{ width: "100%", margin: "0px 70px 0px 0px" }}
              alt=''
            />
          </div>
          <div className='d-flex flex-column' style={{ width: "600px" }}>
            <h1>{item.name}</h1>
            <h2>{`$ ${item.cost}`}</h2>
            <p>{item.details}</p>
            <h4>Stock: {item.stock}</h4>
            <div className='mt-auto p-2'>
              {quantityToAdd === 0 ? (
                <ItemCount stock={item.stock} onAdd={onAdd} />
              ) : (
                ""
              )}
            </div>
            <Link to='/Cart' className='btn btn-primary'>
                  FINALIZAR
            </Link>
            {/* <h1>{test[1]}</h1> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
