import React, { useEffect, useState } from "react";
import ItemsList from "./ItemList";
// import {data} from './data';

const ItemsListContainer = ({ greeting }) => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    let is_ok = true;
    const data = [
      {
        id: 1,
        name: '"MacBook Pro 16" M1 Pro 512 GB - Space Gray',
        stock: 10,
        cost: 500000,
        urlImg: "https://www.macstation.com.ar/img/productos/2616-1.jpg",
      },
      {
        id: 2,
        name: 'MacBook Pro 13" Touch Bar M1 256 GB - Space Gray (2020)',
        stock: 30,
        cost: 250000,
        urlImg:
          "https://www.macstation.com.ar/img/productos/2211-2212-2134-8.jpg",
      },
      {
        id: 3,
        name: 'MacBook Pro 13" Touch Bar i5 2.0 GHz 512 GB - Space Gray',
        stock: 30,
        cost: 300000,
        urlImg: "https://www.macstation.com.ar/img/productos/1829-1.jpg",
      },
      {
        id: 4,
        name: '"MacBook Pro 16" M1 Pro 512 GB - Space Gray',
        stock: 10,
        cost: 500000,
        urlImg: "https://www.macstation.com.ar/img/productos/2616-1.jpg",
      },
      {
        id: 5,
        name: 'MacBook Pro 13" Touch Bar M1 256 GB - Space Gray (2020)',
        stock: 30,
        cost: 250000,
        urlImg:
          "https://www.macstation.com.ar/img/productos/2211-2212-2134-8.jpg",
      },
      {
        id: 6,
        name: 'MacBook Pro 13" Touch Bar i5 2.0 GHz 512 GB - Space Gray',
        stock: 30,
        cost: 300000,
        urlImg: "https://www.macstation.com.ar/img/productos/1829-1.jpg",
      },
      {
        id: 7,
        name: 'MacBook Pro 13" Touch Bar M1 256 GB - Space Gray (2020)',
        stock: 30,
        cost: 250000,
        urlImg:
          "https://www.macstation.com.ar/img/productos/2211-2212-2134-8.jpg",
      },
      {
        id: 8,
        name: 'MacBook Pro 13" Touch Bar i5 2.0 GHz 512 GB - Space Gray',
        stock: 30,
        cost: 300000,
        urlImg: "https://www.macstation.com.ar/img/productos/1829-1.jpg",
      }
    ];
    let mostrarDatos = (data) => {
      return data;
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
    consultaDatos(2000, mostrarDatos(data))
      .then((respuesta) => setDatos(respuesta))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <ItemsList datos={datos} />
    </>
  );
};

export default ItemsListContainer;
