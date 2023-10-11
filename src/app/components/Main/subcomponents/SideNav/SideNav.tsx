import React from 'react'
import Contact from './subcomponents/Contact'
import Options from './subcomponents/Options'
import ProfileBox from './subcomponents/ProfileBox'

const SideNav = () => {
  return (
    <>
        <div className='border-[#964C9A] border-2 rounded-lg w-fit hidden md:block text-center'>
            <div className='px-1 py-2 lg:px-3 lg:pt-3'>
                <ProfileBox />
            </div>
            <Options />
            <Contact />
        </div>
    </>
  )
}

export default SideNav