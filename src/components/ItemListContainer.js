import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { data } from "../utils/products";
import { useParams } from "react-router-dom";

import firestoreFetch from "../utils/firestoreFetch";

const ItemsListContainer = (props) => {
  const [datos, setDatos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { idCategory } = useParams();
  console.log(idCategory);

  useEffect(() => {
    let is_ok = true;
    setIsLoading(true);

    let mostrarDatos = (data) => {
      if (!idCategory) return data;
      else return data.filter((i) => i.category.id === parseInt(idCategory));
    };

    firestoreFetch()
      .then((respuesta) => {
        setIsLoading(false);
        setDatos(mostrarDatos(respuesta));
        respuesta.forEach((i) => console.log(i));
      })
      .catch((err) => console.log(err));
  }, [idCategory]);

  if (isLoading) {
    return <h1 className='text-center'>Cargando Listado de productos...</h1>;
  } else {
    return <ItemList datos={datos} />;
  }
};

export default ItemsListContainer;
