import React from 'react'
import BlogList from '../components/BlogList'

const Home = () => {
  return (
    <div className=' h-screen flex flex-col items-center gap-10'>
      <div className="top w-[35%] mt-[8%] flex flex-col gap-5">
        <h1 className='text-5xl font-bold text-center'>Welcome to <span className='text-[#0056A4]'>Inkwell</span></h1>
        <p className=' text-xl text-center'>Discover thoughtful articles on technologu, programming, and software engineering from passionate writers.</p>
      </div>
      <BlogList />
    </div>
  )
}

export default Home
