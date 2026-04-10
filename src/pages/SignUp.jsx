import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { Navigate, useNavigate } from 'react-router-dom'
import { MyBlogData } from '../context/BlogContext';

const SignUp = () => {
  let {Users, setUsers, Mode}= useContext(MyBlogData);
   let navigate = useNavigate();
   
   let {register, handleSubmit, reset, watch ,formState:{errors, isValid}}= useForm({
    mode: 'onChange'
   })
   let password = watch('password')

   let handleregisterformsubmit = (data) => {
    let newuser = [...Users, data]
    console.log(newuser);
    setUsers(newuser);
    localStorage.setItem('Registered Users',JSON.stringify(newuser))
    reset()
   }
   
  return (
    <div className=' flex justify-center items-center p-3'>
      <div className={Mode ? `flex flex-col shadow rounded-xl p-3 w-[450px] gap-3 bg-white mt-25` : `flex flex-col shadow rounded-xl p-3 w-[450px] gap-3 bg-[#0B0D11] mt-25`}>

        <div className="top">
              <div class={Mode ?`mx-auto mb-4 flex h-12 w-12 items-center justify-center  text-white rounded-full bg-[#0056A4]`: `mx-auto mb-4 flex h-12 w-12 items-center justify-center  text-white rounded-full bg-[#008B74]` }><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pen-line h-6 w-6 text-primary-foreground" aria-hidden="true"><path d="M13 21h8"></path><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path></svg>
              </div>

              <h1 className='font-bold text-2xl text-center'>Create an Account</h1>
              <p className='text-center  '>Join inkwell to start reading or writing</p>

              </div>

        <form onSubmit={handleSubmit(handleregisterformsubmit)} className='flex flex-col p-3 gap-5'>
                  <div className="email flex flex-col gap-2">
            <label className='font-semibold'>Name</label>
            <input {...register('name',{required:'Name is required...'})} className='p-1.5 border border-gray-400 rounded-xl' type="text"  placeholder='John Doe'/>
            {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
        </div>


        <div className="email flex flex-col gap-2">
            <label className='font-semibold'>Email</label>
            <input  {...register('email',{required:'email is required...'})} className='p-1.5 border border-gray-400 rounded-xl' type="email"  placeholder='you@example.com'/>
            {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
        </div>

        <div className="password flex flex-col gap-2">
            <label className='font-semibold'>Password</label>
            <input {...register('password',{required:'password is required...',minLength:{
                value: 6,
                message: 'Minimum 6 characters required...'
            }})} className='p-1.5 border border-gray-400 rounded-xl' type="password"  placeholder='Enter your password'/>
             {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
        </div>

                <div className=" flex flex-col gap-2">
            <label className='font-semibold'>Confirm Password</label>
            <input {...register('cpassword',{required:'Confirm password your password...', validate:(value)=> value === password || "Passwords do not match"})} className='p-1.5 border border-gray-400 rounded-xl' type="password"  placeholder='Confirm your password'/>
             {errors.cpassword && <p className='text-red-600'>{errors.cpassword.message}</p>}
        </div>


         <div>
      <h2 className="text-lg font-semibold mb-4">Account Type</h2>

      <div className="flex gap-4">

        <label className="cursor-pointer">
          <input
            {...register('accountType',{required:'accountType is required...'})}
            type="radio"
            value="Reader"
            className="hidden peer"
            defaultChecked
          />

          <div className={Mode ? `w-50 p-4 rounded-xl border bg-gray-100
            peer-checked:bg-blue-100
            peer-checked:border-blue-500
            transition-all` : `w-50 p-4 rounded-xl border bg-gray-900
           peer-checked:bg-[#008b7451]
            peer-checked:border-[#008B74]
            transition-all`}
            
            
            >
            
            <h3 className="font-semibold">Reader</h3>
            <p className="text-sm text-gray-500">Read articles</p>
          </div>
        </label>

 
        <label className="cursor-pointer">
          <input
            {...register('accountType',{required:'accountType is required...'})}
            type="radio"
            value="Author"
            className="hidden peer"
          />

          <div className={Mode ? `w-50 p-4 rounded-xl border bg-gray-100
            peer-checked:bg-blue-100
            peer-checked:border-blue-500
            transition-all` : `w-50 p-4 rounded-xl border bg-gray-900
            peer-checked:bg-[#008b7451]
          peer-checked:border-[#008B74]
            transition-all` }>
            
            <h3 className="font-semibold">Author</h3>
            <p className="text-sm text-gray-500">Write & publish</p>
          </div>
        </label>
         {errors.accountType && <p className='text-red-600'>{errors.accountType.message}</p>}
      </div>
    </div>

        <button className={Mode ? `bg-[#0056A4] text-white py-1.5 rounded-xl` : `bg-[#008B74] text-white py-1.5 rounded-xl`}>Sign In</button>

        <p className='text-center'>Don't have an account? <span onClick={()=>navigate('/login')} className={Mode ? `cursor-pointer text-[#0056A4]` : `cursor-pointer text-[#008B74]`} >Sign In</span></p>
        </form>


      </div>
    </div>
  )
}

export default SignUp
