import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col text-center'>
            <img src={item.urlImg} className='img-fluid' alt='' />
          </div>
          <div className='d-flex flex-column col text-left'>
            <h1>{item.name}</h1>
            <h2>{`$ ${item.cost}`}</h2>
            <p>{item.details}</p>
            <h4>Stock: {item.stock}</h4>
            <div className='mt-auto p-2'>
              <ItemCount stock={item.stock} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
