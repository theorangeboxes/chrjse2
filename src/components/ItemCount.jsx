import React, { useEffect, useState } from "react";
import { Stack, Button } from "@mui/material";

// const itemStock = 10;

const style = {
  width: "100px",
};

const ItemCount = ({ stock, onAdd }) => {
  const [itemsCount, setItemsCount] = useState(1);
  const [itemStock, setItemStock] = useState(0);

  useEffect(() => {
    setItemStock(stock);
  }, [stock]);

  const increment = () => {
    if (itemsCount < itemStock) setItemsCount(itemsCount + 1);
  };

  const decrement = () => {
    if (itemsCount > 1) setItemsCount(itemsCount - 1);
  };

  const handleClick = (e) => {
    e.stopPropagation();
    onAdd(itemsCount);
  };

  return (
    <>
      <div className='d-flex justify-content-center mt-1'>
        <Stack spacing={2} direction='row'>
          <Button onClick={increment} variant='outlined'>
            +
          </Button>

          <h1 className='text-center' style={style}>
            {itemsCount}
          </h1>
          <Button onClick={decrement} variant='outlined'>
            -
          </Button>
        </Stack>
      </div>
      <div className='d-flex justify-content-center mt-1'>
        <Button
          onClick={handleClick}
          className='text-center'
          style={{ margin: "3px 3px 3px 3px" }}
          variant='outlined'
        >
          Agregar al Carrito
        </Button>
      </div>
    </>
  );
};

export default ItemCount;
