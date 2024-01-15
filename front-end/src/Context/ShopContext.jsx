import React, { createContext, useState } from "react";
import all_products from '../Components/Assets/all_product'

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_products.length + 1; index++) {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        console.log(cartItems);
    }
    const removeCartItem = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }
    const contexValue = { all_products, cartItems, addToCart, removeCartItem }

    return (
        <ShopContext.Provider value={contexValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;