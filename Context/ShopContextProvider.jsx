import { createContext, useState } from 'react';
import { products } from '../assets/frontend_assets/assets';

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
    const currency = "$";
    const Delivery_fee = 10;
    const [search, setSearch] = useState("");
    const [showSearch, setShowSearch] = useState(false);
    const [cart, setCart] = useState([]); // Cart state

    // Add to Cart function
    const addToCart = (product, quantity) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item._id === product._id);
            
            if (existingItem) {
                return prevCart.map((item) =>
                    item._id === product._id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            } else {
                return [...prevCart, { ...product, quantity }];
            }
        });
    };

    // Remove from Cart
    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item._id !== id));
    };

    // Get Cart Total Quantity
    const getTotalItems = () => {
        return cart.reduce((acc, item) => acc + item.quantity, 0);
    };

    const value = {
        products,
        currency,
        Delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        cart,
        addToCart,
        removeFromCart,
        getTotalItems,
    };

    return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;