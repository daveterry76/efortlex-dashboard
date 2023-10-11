import React from 'react'
import profileImg from '../assets/profile-picture.svg'
import dropDownImg from '../assets/dropdown-icon.svg'
import Image from 'next/image'

const Profile = () => {
  return (
    <>
        <div className='flex'>
            <Image
                src={profileImg}
                alt="profile img"
                // width={60}
                className='w-10 lg:w-16'
            />
            <h3 className='mt-2 lg:mt-3 mr-1 cursor-pointer text-[10px] lg:text-sm hidden md:block'>Aminu</h3>
            <Image
                src={dropDownImg}
                alt="dropdown"
                className='cursor-pointer mt-1 w-2 lg:w-3'
            />            
        </div>
    </>
  )
}

export default Profile