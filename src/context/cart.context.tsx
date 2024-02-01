"use client";

import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface CartItem {
    id: string | undefined
    name: string
    price: string 
    subTotal: number
    image: string
    quantity: number
    cartItemQuantity: number
}
export interface ProductItem {
    id: string | undefined
    name: string
    price: string 
    image: string
    quantity: number
}

interface CartContext {
    cartItems: CartItem[]
    setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>
    incQty: (quantityLeft: number, quantityNeeded: number) => void
    decQty: () => void
    addToCart: (product: ProductItem, quantity: number) => void
    removeFromCart: (product: ProductItem) => void
    toggleCartItemQuanitity: (product: ProductItem, value: string) => void
    total: number
    qty: number
}

export const CartContext = createContext<CartContext | undefined>(undefined);


const cartInitialState: CartItem[] = [];
const totalInitialState: number = 0;

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [cartItems, setCartItems] = useState<CartItem[]>(cartInitialState);
    const [total, setTotal] = useState<number>(totalInitialState);
    const [subTotal, setSubTotal] = useState<number | undefined>(undefined);
    const [qty, setQty] = useState<number>(1);



    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    useEffect(() => {
        const cartItemsData = JSON.parse(localStorage.getItem("cartItems") || "[]");
        if (cartItemsData) {
            setCartItems(cartItemsData);
        }
    }, []);

    
    
    useEffect(() => {
        localStorage.setItem('total', JSON.stringify(total));
    }, [total]);

    useEffect(() => {
        const cartTotalData = JSON.parse(localStorage.getItem("total") || "0");
        if (cartTotalData) {
            setTotal(cartTotalData);
        }
    }, [total]);


    // Increment Quantity Functionality
    const incQty = (quantityLeft: number, quantityNeeded: number) => {    
        setQty((prevQty) => {
            if(quantityNeeded >= quantityLeft) return quantityLeft

            return prevQty + 1
        });
    }
  
    // Decrement Quantity Functionality
    const decQty = () => {
        setQty((prevQty) => {
            if(prevQty - 1 < 1) return 1;
     
            return prevQty - 1;
        });
    }


    // Add Item To Cart Functionality
    const addToCart = (product: ProductItem, quantity: number) => {
        // Destructuring from product object
        const { id: productId } = product;

        const productPrice = parseInt(product.price.replace(/,/g, ""))
        
        const productInCart = cartItems.find((cartItem: { id: string | undefined }) => cartItem.id === productId);

        if(productInCart) {
            // toaster('Item already added', 'error')
        }

        else {
            setSubTotal(() => quantity * productPrice);

            if(typeof subTotal === 'number'){
                const subTotalCopy = subTotal;
        
                setCartItems([ 
                    ...cartItems, 
                    {...product, 
                        subTotal: subTotalCopy,
                        cartItemQuantity: quantity
                    } 
                ]);
        
                setTotal((prevTotal: number) => prevTotal + subTotalCopy);
        
                // toaster(`Item added`, 'success');
                
                setSubTotal(undefined);
                setQty(1);
            }
        }
    }


    // Remove Item From Cart Functionality
    const removeFromCart = (product: ProductItem) => {
        const { id: productId } = product

        const foundProduct = cartItems.find((item: { id: string | undefined }) => item.id === productId);

        if(foundProduct !== undefined){
            setTotal(prevTotal => prevTotal - foundProduct.subTotal);
        }

        setCartItems(cartItems.filter((cartItem: { id: string | undefined }) => cartItem.id !== productId));
    }


    // Toggle Item Qunatity In Cart Functionality
    const toggleCartItemQuanitity = (product: ProductItem, value: string) => {
        const { id: productId } = product

        const updatedItem = cartItems.map((cartItem: CartItem) => {
            if(cartItem.id === productId) {
              const cartItemPrice = parseInt(cartItem.price.replace(/,/g, ""))
      
                if(value === 'inc'){
                    const updatedQuantity = { 
                        ...cartItem, 
                        cartItemQuantity: cartItem.cartItemQuantity + 1,
                    };
      
                    const updatedSum = {
                        ...updatedQuantity,
                        subTotal: cartItemPrice * updatedQuantity.cartItemQuantity,
                    };
        
                    setTotal((prevTotal) => prevTotal + cartItemPrice);
        
                    return updatedSum
                }
      
      
      
                if(value === 'dec'){
                    if (cartItem.cartItemQuantity > 1){
                        const updatedQuantity = {
                            ...cartItem, 
                            cartItemQuantity: cartItem.cartItemQuantity - 1,
                        }
      
                        const updatedSum = {
                            ...updatedQuantity,
                            subTotal: cartItem.subTotal - cartItemPrice
                        }
      
                        setTotal((prevTotal) => prevTotal - cartItemPrice);
      
                        return updatedSum
                    }
                }
            }
            
            return cartItem;
        });
      
        setCartItems(updatedItem);
    } 

    
    return (
        <CartContext.Provider 
            value={{ 
                cartItems, 
                setCartItems,
                addToCart,
                removeFromCart,
                toggleCartItemQuanitity,
                total,
                incQty,
                decQty,
                qty,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};


// Create a custom hook to consume the CartContext
export const useCart = () => {
    const context = useContext(CartContext)
    if (!context) {
      throw new Error('useCart must be used within a CartProvider')
    }
    return context
}