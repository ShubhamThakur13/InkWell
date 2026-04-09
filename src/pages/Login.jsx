import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'

const Login = () => {
     let navigate = useNavigate();

     let handleformsubmit = (data) => {
      console.log(data);
      reset()
     }
   let {register, handleSubmit, reset, formState:{errors, isValid}} = useForm({
    mode: 'onChange'
   });
  return (
    <div className='h-screen flex justify-center items-center'>
      <div className='flex flex-col shadow rounded-xl p-3 w-[450px] gap-3 bg-white'>

        <div className="top">
              <div class="mx-auto mb-4 flex h-12 w-12 items-center justify-center  text-white rounded-full bg-[#0056A4]"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pen-line h-6 w-6 text-primary-foreground" aria-hidden="true"><path d="M13 21h8"></path><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path></svg>
              </div>

              <h1 className='font-bold text-2xl text-center'>Welcome Back</h1>
              <p className='text-center  '>Sign in to your account to continue</p>

              </div>

        <form onSubmit={handleSubmit(handleformsubmit)} className='flex flex-col p-3 gap-5'>
        <div className="email flex flex-col gap-2">
            <label className='font-semibold'>Email</label>
            <input {...register('email',{required:'Email is required...'})} className='p-1.5 border border-gray-400 rounded-xl' type="email"  placeholder='you@example.com'/>
            {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
        </div>

        <div className="password flex flex-col gap-2">
            <label className='font-semibold'>Password</label>
            <input {...register('password',{required:'password is required...'})} className='p-1.5 border border-gray-400 rounded-xl' type="password"  placeholder='Enter your password'/>
             {errors.password && <p className='text-red-600' >{errors.password.message}</p>}
        </div>

        <button className='bg-[#0056A4] text-white py-1.5 rounded-xl'>Sign In</button>

        <p className='text-center'>Don't have an account? <span onClick={()=>navigate('/signup')} className='cursor-pointer text-[#0056A4]'>Sign up</span></p>
        </form>


      </div>
    </div>
  )
}

export default Login
