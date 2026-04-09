import React, { useContext } from 'react'
import { MyBlogData } from '../context/BlogContext'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
       let navigate =  useNavigate()
   let {Mode, setMode} = useContext(MyBlogData);
  return (
    <div className='flex items-center justify-around p-3 border-b absolute w-screen'>
        <div className="logo">
            <a class="flex items-center gap-2" href="/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pen-line h-6 w-6 text-primary" aria-hidden="true"><path d="M13 21h8"></path><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path></svg><span class="text-xl font-semibold tracking-tight">Inkwell</span></a>
        </div>

        <div className="Auth flex items-center gap-2">
            <div className="mode">
                {Mode ? <h4 className='text-xl px-2.5 py-1.5 hover:bg-[#008C75] hover:text-white rounded-xl' onClick={()=>setMode(false)}><i class="ri-moon-line"></i></h4> : <h4 className='text-xl px-2.5 py-1.5 hover:bg-[#008C75] hover:text-white rounded-xl' onClick={()=>setMode(true)}><i class="ri-sun-line"></i></h4>}
            </div>

            <div className="buttons flex gap-2">
                <button onClick={()=> {
                    navigate('/login')
                }} className='px-3 py-1.5 hover:bg-[#008C75] hover:text-white rounded-xl'>Login</button>
                <button onClick={()=> {
                    navigate('/signup')
                }}
                 className='px-3 py-1.5 bg-[#0056A4] text-white rounded-xl' >Sign Up</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar
