'use client'

import React, { useContext } from 'react'
import Image from 'next/image'
import { ProductContext } from '@/app/contexts/ProductsContext';
import { ProductsContextTypes } from '@/app/types/ProductsContextTypes';
import rating from '../assets/rating.svg'
import { recommendedProducts } from '@/app/constants/Products';


const RecommendedProducts = () => {
  const { popularProducts } = useContext<ProductsContextTypes>(ProductContext);


  return (
    <>
        <div className='flex justify-between gap-7 mt-8'>
          <h2 className='font-bold text-xs md:text-sm ml-9 md:ml-0 md:mt-0 mt-2 lg:mt-2'>Recommended Products</h2>
        </div>
        <div className='mt-2 flex flex-wrap justify-center md:justify-start gap-x-3 gap-y-6'>
                {recommendedProducts.map((product, index) => (
                    <div key={index} className='flex border rounded-md shadow-lg w-fit py-3 pl-3 pr-5 relative'>
                        <Image 
                        src={product.imageSrc} 
                        alt='product img'
                        width={90}
                        height={100} 
                        />
                        <div className='pl-5'>
                            <h4 className='font-bold text-xs lg:text-sm'>{product.productTitle}</h4>
                            <p className='font-light text-[10px] lg:text-[12px] my-1'>{product.productDesc}</p>

                            <span className='font-bold text-[9px] lg:text-[11px]'>${product.amountNew}</span>
                            <span className='text-[9px] lg:text-[11px] opacity-50 mx-3'><s>${product.amountOld}</s></span>

                            <p className='text-[#7B61FF] text-[9px] lg:text-[11.5px] my-1'>You save ${(Number(product.amountOld) - Number(product.amountNew)).toFixed(2)}</p>

                            <Image
                                src={rating}
                                alt='rating'
                            />
                        </div>
                    </div>
                ))}
            </div>
    </>
  )
}

export default RecommendedProducts