import React from 'react'
import Content from './subcomponents/Content/Content'
import SideNav from './subcomponents/SideNav/SideNav'

const Main = () => {
  return (
    <>
        <div className='bg-[#FFFFFF] pt-12 px-[1rem] md:px-[5rem] pb-16 lg:px-[10rem] flex'>
          <div className='w-0 md:w-1/5 lg:w-1/3'>
            <SideNav />
          </div>
          <div className='w-full md:w-4/5 lg:w-2/3 flex justify-center'>
            <Content />
          </div>
        </div>
    </>
  )
}

export default Main