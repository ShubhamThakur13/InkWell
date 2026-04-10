import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { MyBlogData } from '../context/BlogContext'

const MainPageLayout = () => {
  const {Mode} = useContext(MyBlogData)
  return (
    <div className= {Mode ? 'bg-[#F9F9F8] max-w-[1600px] m-auto' :`bg-black max-w-[1600px] text-white m-auto`}>
        <Navbar />
        <Outlet/>
    </div>
  )
}

export default MainPageLayout
