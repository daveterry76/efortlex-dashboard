import { Input } from 'postcss'
import React from 'react'
import Image from 'next/image'
import searchIcon from '../assets/search-icon.svg'

const SearchBar = () => {
  return (
    <>
        <div className='relative'>
            <Image 
                src={searchIcon}
                alt="search icon"
                width={11}
                className="absolute top-[0.6rem] md:top-[0.9rem] left-1 lg:top-4 lg:left-2"
            />
            <input
                type='search'
                placeholder='Search something...'
                className='bg-gray-300 rounded-md w-44 h-8 md:h-10 md:w-64 lg:w-80 pl-6 pr-1 py-2 placeholder:font-poppins placeholder:font-bold placeholder:text-[10px] lg:placeholder:text-sm'
            />
        </div>
    </>
  )
}

export default SearchBar