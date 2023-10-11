import Image from 'next/image'
import React from 'react'
import contactIcon from '../assets/contact-icon.svg'

const Contact = () => {
  return (
    <>
        <div className='flex justify-around bg-[#964C9AA6] mt-16 p-3 cursor-pointer'>
            <Image
                src={contactIcon}
                alt='contact icon'
                width={20}
            />
            <h4 className='text-white font-bold text-sm hidden lg:block'>Contact Support</h4>
        </div>
    </>
  )
}

export default Contact