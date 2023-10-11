'use client'

import React, { createContext, useState } from 'react'
import { products } from '../constants/Products'
import { ProductsDefault } from '../constants/ProductsDefault'
import { ProductsContextTypes } from '../types/ProductsContextTypes'


export const ProductContext = createContext<ProductsContextTypes>(ProductsDefault)

const ProductsContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [popularProducts, setPopularProducts] = useState<{}>(products);

  const [imageSrc, setImageSrc] = useState<any>()
  const [productTitle, setProductTitle] = useState<string>('')
  const [productDesc, setProductDesc] = useState<string>('')
  const [amountNew, setAmountNew] = useState<number>(0);
  const [amountOld, setAmountOld] = useState<number>(0);
  const [amountDiff, setAmountDiff] = useState<number>(0);



  return (
    <ProductContext.Provider
      value={{
        popularProducts,
        setPopularProducts,
        imageSrc,
        setImageSrc,
        productTitle, 
        setProductTitle,
        productDesc,
        setProductDesc,
        amountNew,
        setAmountNew,
        amountOld,
        setAmountOld,
        amountDiff,
        setAmountDiff
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export default ProductsContextProvider