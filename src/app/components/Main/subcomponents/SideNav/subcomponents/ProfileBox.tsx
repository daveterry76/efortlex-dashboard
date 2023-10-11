import Image from 'next/image'
import React from 'react'
import profileImg from '../assets/profile-img.svg'

const ProfileBox = () => {
  return (
    <>
        <div className='flex bg-[#964C9A1A] w-10 lg:w-fit rounded-lg p-[0.2rem] pr-1 lg:pr-3 h-10 lg:h-fit border border-[#964C9A]'>
            <Image 
                src={profileImg}
                alt="profile icon"
                width={60}
            />
            <div className='text-center mt-2 hidden lg:block'>
                <h4 className='text-sm font-bold'>John Doe Name</h4>
                <p className='text-[10px]'>Marketer</p>
            </div>
        </div>
    </>
  )
}

export default ProfileBox