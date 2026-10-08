import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface CartItemProps {
    itemId: string;
    itemType: 'game' | 'dlc';
    gameName: string;
    gamePictureUrl: string;
    price: number;
    discount?: number;
    endDate?: string;
}

interface CartContextProps {
    cart: CartItemProps[];
    addToCart: (item: CartItemProps) => void;
    removeFromCart: (itemId: string) => void;
    removeAllFromCart: () => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [cart, setCart] = useState<CartItemProps[]>(() => {
        const storedCart = localStorage.getItem('cart');
        return storedCart ? JSON.parse(storedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (item: CartItemProps) => {
        setCart((prevCart) => prevCart.some((existing) => existing.itemId === item.itemId) ? prevCart : [...prevCart, item]);
    };

    const removeFromCart = (itemId: string) => {
        setCart((prevCart) => prevCart.filter(item => item.itemId !== itemId));
    };

    const removeAllFromCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, removeAllFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = (): CartContextProps => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
