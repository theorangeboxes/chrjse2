import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = (props) => {
  const [item, setItem] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let is_ok = true;
    const data = [
      {
        id: 1,
        name: 'MacBook Pro 16" M1 Pro 512 GB - Space Gray',
        details: `Todo el poder para los pro!! La potencia de los ultrarrápidos chips
          M1 Pro y M1 Max te permite disfrutar un rendimiento revolucionario
          con una excepcional duración de la batería. Además, la MacBook Pro
          trae una espectacular pantalla Liquid Retina XDR y todos los puertos
          que necesitas. Esta es la notebook que estabas esperando.`,
        stock: 5,
        cost: 549999,
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
      },
    ];
    let mostrarItem = (data) => {
      return data[0];
    };
    let getItem = (time, task) => {
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
    getItem(2000, mostrarItem(data))
      .then((item) => {
        setIsLoading(false);
        setItem(item);
      })
      .catch((err) => console.log(err));
  }, []);

  //verifico si el estado isLoading es true, renderizo el cargando, sino retorno el compoennte Item Details
  if (isLoading) {
    return <h1 className="text-center">Cargando Item Detail...</h1>;
  } else {
    return <ItemDetail item={item} />;
  }
};

export default ItemDetailContainer;
