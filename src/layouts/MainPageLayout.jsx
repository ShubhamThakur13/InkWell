import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const MainPageLayout = () => {
  return (
    <div className='bg-[#F9F9F8]'>
        <Navbar />
        <Outlet/>
    </div>
  )
}

export default MainPageLayout
