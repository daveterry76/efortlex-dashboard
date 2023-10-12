import React from 'react'
import PopularProducts from './subcomponents/PopularProducts'
import RecommendedProducts from './subcomponents/RecommendedProducts'

const Content = () => {
  return (
    <>
      <div>
        <PopularProducts />
        <RecommendedProducts />
      </div>
    </>
  )
}

export default Content