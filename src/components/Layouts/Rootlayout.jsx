import React from 'react'
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router'
import Footer from '../Footer/Footer'

const Rootlayout = () => {
  return (
    <>
    <div className='container mx-auto px-4'>
       <div className='container fixed z-50 bg-white dark:bg-gray-900 shadow-md  '>
         <Header></Header>
        <Navbar></Navbar>
       </div>
        <Outlet></Outlet>
        <Footer></Footer>

    </div>
    </>
  )
}

export default Rootlayout