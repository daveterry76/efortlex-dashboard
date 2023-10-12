/* eslint-disable @next/next/no-img-element */
'use client'

import React, { useContext, useState } from 'react'
import rating from '../assets/rating.svg'
import Image from 'next/image'
import { products } from '@/app/constants/Products'
import { ProductContext } from '@/app/contexts/ProductsContext'
import { ProductsContextTypes } from '@/app/types/ProductsContextTypes'
import AddProductModal from '@/app/utils/addProductModal'
import { Button, useDisclosure } from '@nextui-org/react'
import hamburger from '../assets/hamburger.svg'
import SideNavHamburger from '@/app/utils/sideNavHamburger'
import useCrud from '@/app/hooks/useCrud'


const PopularProducts = () => {
    const [size, setSize] = React.useState<string>('sm');

    const { popularProducts } = useContext<ProductsContextTypes>(ProductContext);

    const { deletePopularProducts } = useCrud();

  return (
    <>
        <div>
            {/* <Image
                src={hamburger}
                className='block md:hidden ml-8'
                alt='hamburger icon'
                width={20}
            /> */}
            <SideNavHamburger />
            <div className='flex justify-between gap-7'>
                <h2 className='font-bold text-xs md:text-sm ml-9 md:ml-0 md:mt-0 mt-2 lg:mt-2'>Popular Products</h2>
                <AddProductModal size={size} setSize={setSize} />
            </div>
            { popularProducts.length > 0 ? 
            <div className='mt-2 flex flex-wrap justify-center md:justify-start gap-x-3 gap-y-6'>
                {popularProducts.map((product, index) => (
                    <div key={index} className='flex border rounded-md shadow-lg w-fit py-3 pl-3 pr-5 relative'>
                        <div 
                            className='text-base absolute right-3 top-3 cursor-pointer'
                        >
                            {/* <OptionsDropdown /> */}
                            <svg onClick={() => deletePopularProducts(product.id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                            </svg>
                        </div>
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
            : <p className='mt-5 text-md text-center'>Sorry. No Items Available</p> }
        </div>
    </>
  )
}

export default PopularProducts