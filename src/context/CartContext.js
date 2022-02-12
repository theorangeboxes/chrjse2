import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([
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
      category: {
        name: "Macbook",
        id: 1,
      },
      qtyInCart: 1,
    },
    {
      id: 2,
      name: 'MacBook Pro 13" Touch Bar M1 256 GB - Space Gray (2020)',
      details: `Todo el poder para los pro!! La potencia de los ultrarrápidos chips
            M1 Pro y M1 Max te permite disfrutar un rendimiento revolucionario
            con una excepcional duración de la batería. Además, la MacBook Pro
            trae una espectacular pantalla Liquid Retina XDR y todos los puertos
            que necesitas. Esta es la notebook que estabas esperando.`,
      stock: 2,
      cost: 250000,
      urlImg:
        "https://www.macstation.com.ar/img/productos/2211-2212-2134-8.jpg",
      category: {
        name: "Macbook",
        id: 1,
      },
      qtyInCart: 1,
    },
  ]);

  const isInCart = (id) => {
    let itemFind = cartList.find((i) => i.id === id);
    return itemFind ? true : false;
  };

  const addToCart = (item, _quantityToAdd) => {
    //Si existe busco el item del cartList y le modifico la propiedad qtyInCart, sumando cantidad
    //Sino lo agrego y le sumo la propiedad qtyInCart
    isInCart(item.id)
      ? (cartList.find((i) => i.id === item.id).qtyInCart += _quantityToAdd)
      : setCartList([...cartList, { ...item, qtyInCart: _quantityToAdd }]);
  };

  const removeItems = () => {
    setCartList([]);
  };

  const removeItem = (id) => {
    console.log(id);
    setCartList(cartList.filter((i) => i.id !== id));
  };

  return (
    <CartContext.Provider
      value={{ cartList, removeItems, removeItem, addToCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
