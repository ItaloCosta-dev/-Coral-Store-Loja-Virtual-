import React, { createContext, useState, useContext, ReactNode } from "react"

interface ProductContextProps {
    productName: string
    productPrice: number
    quantity: number
    setProductName: (name: string) => void
    setProductPrice: (price: number) => void
    setQuantity: (quantity: number) => void
}

const ProductContext = createContext<ProductContextProps | undefined>(undefined)

export const useProduct = () => {
    const context = useContext(ProductContext)
    if(!context) {
        throw new Error("useProduct deve ser usado dentro de um ProductProvider.")
    }
    return context
}

export const ProductProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [productName, setProductName] = useState<string>("")
    const [productPrice, setProductPrice] = useState<number>(0)
    const [quantity, setQuantity] = useState<number>(1)

    return (
        <ProductContext.Provider value={{ productName, productPrice, quantity, setProductName, setProductPrice, setQuantity }}>
            {children}
        </ProductContext.Provider>
    )
}