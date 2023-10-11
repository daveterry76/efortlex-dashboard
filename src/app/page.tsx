import Image from 'next/image'
import Main from './components/Main/Main'
import Navbar from './components/Navbar/Navbar'
import ProductsContextProvider from './contexts/ProductsContext'
import { NextUIProvider } from "@nextui-org/react";

export default function Home() {
  return (
    <>
      <div className='font-poppins'>
          <Navbar />
          <Main />
      </div>
    </>
  )
}
