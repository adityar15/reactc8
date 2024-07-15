import React, { createContext, useState } from 'react'

export const CartContext = createContext({
    qty: 0,
    setQty: (newQuantity) => { }
})


export default function CartProvider({children}) {
    const [quantity, setQuantity] = useState(0)
    return (
        <CartContext.Provider value={{
            qty: quantity,
            setQty: setQuantity
        }}>
            {children}
        </CartContext.Provider>
    )
}
