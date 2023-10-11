import React, { MouseEventHandler, useContext, useState } from 'react'
import { ProductContext } from '../contexts/ProductsContext'
import { ProductsContextTypes } from '../types/ProductsContextTypes'
import { v4 as uuid } from 'uuid'

const useCrud = () => {
  
  const { id, imageSrc, productTitle, productDesc, amountNew, amountOld, popularProducts, setPopularProducts } = useContext<ProductsContextTypes>(ProductContext)
  const [showEdit, setShowEdit] = useState(false);

  const addPopularProducts = () => {
    const newProduct = { id: uuid(), imageSrc, productTitle, productDesc, amountNew, amountOld }
    setPopularProducts([...popularProducts, newProduct]);
  }


  const editPopularProducts = () => {
    
  }

  const deletePopularProducts = (id: string): void => {
    const filteredProducts = popularProducts.filter((product) => product.id !== id)
    setPopularProducts(filteredProducts)
    // console.log(popularProducts)
  }


  return (
    {
    addPopularProducts,
    editPopularProducts,
    deletePopularProducts
    }
  )
}

export default useCrud