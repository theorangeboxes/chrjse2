import React from "react";
import { Link }  from 'react-router-dom';

const Item = ({producto}) => {
  return (
    <div className='card m-2' style={{ width: "18rem" }}>
      <img className='card-img-top' src={producto.urlImg} alt='Card cap' />
      <div className='card-body'>
        <h5 className='card-title'>{producto.name}</h5>
        <p className='card-text'>
          Precio: $ {producto.cost} <br />
          Stock: {producto.stock}
        </p>
       
        <Link to={`/item/${producto.id}`} className='btn btn-primary'>
          Detalles
        </Link>
      </div>
    </div>
  );
};

export default Item;
