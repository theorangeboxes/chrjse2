import React from "react";
import Item from "./Item";

const ItemList = ({ datos }) => {
  return (
    <div className='d-flex justify-content-around flex-wrap'>
      {datos.map((item) => (
        <Item key={item.id} producto={item} />
      ))}
    </div>
  );
};

export default ItemList;
