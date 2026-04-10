import React, { useContext } from 'react'
import BlogList from '../components/BlogList'
import { MyBlogData } from '../context/BlogContext';

const Home = () => {
    let { Users, Mode } = useContext(MyBlogData);
  return (
    <div className='  flex flex-col items-center gap-10 p-3'>
      <div className="top w-[35%] mt-[8%] flex flex-col gap-5">
        <h1 className='text-5xl font-bold text-center'>Welcome to <span className={Mode ? `text-[#0056A4]`: `text-[#008C75]`}>Inkwell</span></h1>
        <p className=' text-xl text-center'>Discover thoughtful articles on technologu, programming, and software engineering from passionate writers.</p>
      </div>
      

        <div className=" top flex items-center justify-between w-[65%]">
        <h2 className='text-2xl font-bold'>Latest Articles</h2>
        <p>3 articles</p>
      </div>
      
      <div className='flex gap-8 w-[70%] items-center flex-wrap justify-center'>
        {Users.map((elem)=> {
          return       <BlogList elem={elem} />
        })}
      </div>
    </div>
  )
}

export default Home
