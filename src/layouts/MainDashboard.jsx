import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import { MyBlogData } from '../context/BlogContext'
import { Outlet } from 'react-router-dom';

const MainDashboard = () => {
    let {Mode} = useContext(MyBlogData);
  return (
    <div className= {Mode ? 'bg-[#F9F9F8] max-w-[1600px] m-auto' :`bg-black max-w-[1600px] text-white m-auto`}>
        <Navbar/>
        <Outlet />
    </div>
  )
}

export default MainDashboard
