import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
      <div>
        <div className="email">
            <label className='font-semibold'>Email</label>
            <input type="text"  placeholder='you@example.com'/>
        </div>
      </div>
    </div>
  )
}

export default Login
