import React, { useEffect, useState } from "react";

const Item = ({producto}) => {
  return (
    <div className='card m-2' style={{ width: "18rem" }}>
      <img className='card-img-top' src={producto.urlImg} alt='Card image cap' />
      <div className='card-body'>
        <h5 className='card-title'>{producto.name}</h5>
        <p className='card-text'>
          Precio: $ {producto.cost} <br />
          Stock: {producto.stock}
        </p>
        <a href='#' className='btn btn-primary'>
          Agregar al carrito
        </a>
      </div>
    </div>
  );
};

export default Item;
