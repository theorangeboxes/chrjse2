import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { data } from "../utils/products";
import { useParams, Navigate } from "react-router-dom";

import firestoreFetch from "../utils/firestoreFetch";

const ItemDetailContainer = (props) => {
  const [item, setItem] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const urlParams = useParams();

  useEffect(() => {
    let is_ok = true;
    let mostrarItem = (data) => {
      return data.find((i) => i.id === parseInt(urlParams.id));
    };
    firestoreFetch()
      .then((respuesta) => {
        setIsLoading(false);
        setItem(mostrarItem(respuesta));
        respuesta.forEach((i) => console.log(i));
      })
      .catch((err) => console.log(err));
  }, [urlParams.id]);

  //si item no existe, redirecciono a home
  if (!item) {
    return <Navigate to='/' />;
  }
  //verifico si el estado isLoading es true, renderizo el cargando, sino retorno el compoennte Item Details
  if (isLoading) {
    return <h1 className='text-center'>Cargando Item Detail...</h1>;
  }

  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
