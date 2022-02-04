import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
  return (
    <>
       <div className='container-fluid'>
        <div className='d-flex flex-wrap justify-content-center'>
          <div className='d-flex' style={{width:'600px'}}>
            <img src={item.urlImg} className='rounded' style={{width:'100%', margin: '0px 70px 0px 0px'}} alt='' />
          </div>
          <div className='d-flex flex-column' style={{width:'600px'}}>
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
