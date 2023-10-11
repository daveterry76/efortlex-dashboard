import React from 'react'
import Image from 'next/image'
import Logo from './assets/Logo.svg'
import notifIcon from './assets/notif-icon.svg'
import Links from './subcomponents/Links'
import SearchBar from './subcomponents/SearchBar'
import Profile from './subcomponents/Profile'
import hamburger from './assets/hamburger.svg'
import NavHamburger from '@/app/utils/navHamburger'

const Navbar = () => {
  return (
    <>
      <div className='bg-white flex justify-evenly lg:justify-around lg:pl-12 border-b-2 shadow-lg py-2'>
        <div className='flex items-center gap-10'>
          <Image 
            src={Logo}  
            // width={50}
            // height={50}
            className='w-[1.5rem] h-[1.5rem] md:w-[2rem] md:h-[2rem] lg:w-[3rem] lg:h-[3rem]'
            alt='brand logo' 
          />
          <Links />
        </div>
        <div className='flex items-center gap-4 md:gap-10 lg:gap-12'>
          <SearchBar />
          <Profile />
          <Image
            src={notifIcon}
            alt='notif icon'
            // width={20}
            className='w-[0.8rem] lg:w-[1.25rem]'
          />
           {/* <Image
            src={hamburger}
            className='block lg:hidden'
            alt='hamburger icon'
            width={20}
          /> */}
          <NavHamburger />
        </div>
      </div>
    </>
  )
}

export default Navbar