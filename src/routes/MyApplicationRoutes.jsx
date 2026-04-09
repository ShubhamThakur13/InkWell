import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from '../pages/Login'
import MainPageLayout from '../layouts/MainPageLayout'
import BlogList from '../components/BlogList'
import SignUp from '../pages/SignUp'
import Home from '../pages/Home'

const MyApplicationRoutes = () => {
    let myroute = createBrowserRouter([
        {
            path: '/',
            element: <MainPageLayout />,
            children:[
                {
                    path: '',
                    element: <Home/>
                },

                {
                    path:'/login',
                    element: <Login />
                },

                {
                    path:'/signup',
                    element: <SignUp />
                }
            ]
        }
    ])
  return (<RouterProvider router={myroute}/>)
}

export default MyApplicationRoutes
