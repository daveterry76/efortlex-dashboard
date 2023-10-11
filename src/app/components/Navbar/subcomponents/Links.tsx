import Link from 'next/link'
import React from 'react'

const Links = () => {
  return (
    <>
      <div className='hidden lg:flex gap-2 font-bold'>
        <Link href='#'>Products</Link>
        <Link href='#'>Services</Link>
        <Link href='#'>Blogs</Link>
      </div>
    </>
  )
}

export default Links