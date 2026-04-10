import React, { useContext } from 'react'
import Blog from './Blog'
import { MyBlogData } from '../context/BlogContext'
import { User } from 'lucide-react';

const BlogList = () => {
 let {Users} =  useContext(MyBlogData);
  return (
    <div>
      <div className="w-screen top flex items-center justify-evenly">
        <h2 className='text-2xl font-bold'>Latest Articles</h2>
        <p>3 articles</p>
      </div>
      <div>
        {Users.map((elem)=>{
        })}
      </div>
    </div>
  )
}

export default BlogList
