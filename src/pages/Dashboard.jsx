import React, { useContext } from 'react'
import { MyBlogData } from '../context/BlogContext'
import { Package, Package2, Plus } from 'lucide-react';

const Dashboard = () => {
 let {LoginUser} = useContext(MyBlogData);
  return (
    <div className='h-screen pt-[8%] px-[20%] flex flex-col gap-3'>
      <div className="top flex justify-between items-center">
       <div className='flex flex-col gap-2'>
        <h1 className='text-3xl font-bold'>Dashboard</h1>
        <p className='text-gray-600'>Manage your articles, {LoginUser.name}</p>
       </div>

       <button className='bg-[#0055A5] text-white py-2 px-3 flex gap-2 rounded-xl cursor-pointer active:scale-95'><Plus/> New Article</button>
      </div>

      <div className="middle flex justify-evenly pt-6 gap-3 ">
        <div className='bg-white w-[300px] p-3 px-6 pt-5 h-[130px] rounded-xl flex flex-col shadow'>
          <p className='text-gray-600'>Total Articles</p>
          <h1 className='text-3xl font-bold text-black'>0</h1>
        </div>
        <div className='bg-white w-[300px] p-3 px-6 pt-5 h-[130px] rounded-xl flex flex-col shadow'>
          <p className='text-gray-600'>Total Articles</p>
          <h1 className='text-3xl font-bold text-green-600'>0</h1>
        </div>
        <div className='bg-white w-[300px] p-3 px-6 pt-5 h-[130px] rounded-xl flex flex-col shadow'>
          <p className='text-gray-600'>Total Articles</p>
          <h1 className='text-3xl font-bold text-gray-600'>0</h1>
        </div>
      </div>

      <div>
        <h2>Your Articles</h2>
        <div className='bg-white w-full flex items-center flex-col p-3 h-fit rounded-xl gap-3 shadow'>
         <p className='text-2xl'><Package2/></p>
         <div className='flex flex-col gap-1 text-center'>
          <p className='font-bold text-xl'>No articles yet</p>
          <p>Start writing your first article</p>

          </div>
          <button className='bg-[#0055A5] text-white py-2 px-3 flex gap-2 rounded-xl cursor-pointer active:scale-95'><Plus/> New Article</button>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
