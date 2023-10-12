import React, { MouseEventHandler, useContext, useState } from 'react'
import { ProductContext } from '../contexts/ProductsContext'
import { ProductsContextTypes } from '../types/ProductsContextTypes'
import { v4 as uuid } from 'uuid'

const useCrud = () => {
  
  const { id, imageSrc, setImageSrc, productTitle, setProductTitle, productDesc, setProductDesc, amountNew, setAmountNew, amountOld, setAmountOld, amountDiff, setAmountDiff, popularProducts, setPopularProducts } = useContext<ProductsContextTypes>(ProductContext)

  const addPopularProducts = () => {
    const newProduct = { id: uuid(), imageSrc, setImageSrc, productTitle, setProductTitle, productDesc, setProductDesc, amountNew, setAmountNew, amountOld, setAmountOld, amountDiff, setAmountDiff }
    setPopularProducts([...popularProducts, newProduct]);
  }

  const deletePopularProducts = (id: string | undefined): React.MouseEventHandler<SVGSVGElement> | undefined => {
    const filteredProducts = popularProducts.filter((product) => product.id !== id)
    setPopularProducts(filteredProducts)
    console.log(popularProducts)
    return
  }


  return (
    {
    addPopularProducts,
    deletePopularProducts
    }
  )
}

export default useCrud