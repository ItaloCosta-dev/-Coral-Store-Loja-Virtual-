import Img01 from "../assets/01.png"
import Img02 from "../assets/02.png"
import Img03 from "../assets/03.png"
import Img04 from "../assets/04.png"
import Img05 from "../assets/05.png"
import Img06 from "../assets/06.png"
import Img07 from "../assets/07.png"
import Img08 from "../assets/08.png"
import Img09 from "../assets/09.png"
import Img10 from "../assets/10.png"
import Img11 from "../assets/11.png"
import Img12 from "../assets/12.png"
import Img13 from "../assets/13.png"
import Img14 from "../assets/14.png"
import Img15 from "../assets/15.png"
import Img16 from "../assets/16.png"
import Img17 from "../assets/17.png"


import React, { createContext, useState, useContext, ReactNode } from "react"

interface Product {
    imageSrc: string;
    productName: string;
    productCategory: string;
    productPrice: number;
}

interface ProductContextProps {
    productName: string
    productPrice: number
    quantity: number
    setProductName: (name: string) => void
    setProductPrice: (price: number) => void
    setQuantity: (quantity: number) => void
    products: Product[]
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
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

    const [products, setProducts] = useState<Product[]>([
        { imageSrc: Img01.src, productName: "Jaqueta masculina", productCategory: "Masculino", productPrice: 179.90 },
        { imageSrc: Img02.src, productName: "Vestido florido vermelho", productCategory: "Feminino", productPrice: 129.90 },
        { imageSrc: Img03.src, productName: "Casaco branco", productCategory: "Feminino", productPrice: 119.90 },
        { imageSrc: Img04.src, productName: "Casaco amarelo", productCategory: "Masculino", productPrice: 149.90 },
        { imageSrc: Img05.src, productName: "Camisa social bege", productCategory: "Masculino", productPrice: 169.90 },
        { imageSrc: Img06.src, productName: "Saia branca e rosa", productCategory: "Feminino", productPrice: 129.90 },
        { imageSrc: Img07.src, productName: "Bolsa de couro", productCategory: "Feminino", productPrice: 99.90 },
        { imageSrc: Img08.src, productName: "Vestido florido branco", productCategory: "Feminino", productPrice: 139.90 },
        { imageSrc: Img09.src, productName: "Relógio feminino white", productCategory: "Feminino", productPrice: 139.90 },
        { imageSrc: Img10.src, productName: "Relógio femino gold", productCategory: "Feminino", productPrice: 159.90 },
        { imageSrc: Img11.src, productName: "Vestido verde", productCategory: "Feminino", productPrice: 149.90 },
        { imageSrc: Img12.src, productName: "Tênis nike", productCategory: "Unissex", productPrice: 169.90 },
        { imageSrc: Img13.src, productName: "Cachecól colorido", productCategory: "Unissex", productPrice: 119.90 },
        { imageSrc: Img14.src, productName: "Mochila Nike rosa", productCategory: "Feminino", productPrice: 129.90 },
        { imageSrc: Img15.src, productName: "Calça Rosa", productCategory: "Feminino", productPrice: 129.90 },
        { imageSrc: Img16.src, productName: "Óculos de sól", productCategory: "Unissex", productPrice: 119.90 },
        { imageSrc: Img17.src, productName: "Casaco azul", productCategory: "Masculino", productPrice: 169.90 },
      ]);

    return (
        <ProductContext.Provider 
            value={{ 
                productName, 
                productPrice, 
                quantity, 
                setProductName, 
                setProductPrice, 
                setQuantity,
                products,
                setProducts
            }}>
            {children}
        </ProductContext.Provider>
    )
}