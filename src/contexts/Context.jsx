import { createContext, useContext } from "react";

import { initialProducts } from "../data/data";

const CartContext = createContext();

const CartContextProvider = (props) => {
    const product = initialProducts;

    return <CartContext.Provider value={product}>{props.children}</CartContext.Provider>;
};

const useCartContext = () => useContext(CartContext);

export { CartContextProvider, useCartContext };
