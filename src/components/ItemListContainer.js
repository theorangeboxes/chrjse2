import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
// import {data} from './data';
import { data } from "../utils/products";
import { useParams } from "react-router-dom";

const ItemsListContainer = (props) => {
  const [datos, setDatos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { idCategory } = useParams();
  console.log(idCategory);

  useEffect(() => {
    let is_ok = true;
    setIsLoading(true);
    let mostrarDatos = (data) => {
      // return data.filter(i => i.category.id === idCategory);
      if (!idCategory) return data;
      else return data.filter((i) => i.category.id === parseInt(idCategory));
    };
    let consultaDatos = (time, task) => {
      return new Promise((resolve, reject) => {
        if (is_ok) {
          setTimeout(() => {
            resolve(task);
          }, time);
        } else {
          reject("Error");
        }
      });
    };
    consultaDatos(3000, mostrarDatos(data))
      .then((respuesta) => {
        setIsLoading(false);
        setDatos(respuesta);
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
