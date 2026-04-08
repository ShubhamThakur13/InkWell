import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from '../pages/Login'
import MainPageLayout from '../layouts/MainPageLayout'
import BlogList from '../components/BlogList'

const MyApplicationRoutes = () => {
    let myroute = createBrowserRouter([
        {
            path: '/',
            element: <MainPageLayout />,
            children:[
                {
                    path: '',
                    element: <BlogList/>
                },

                {
                    path:'/login',
                    element: <Login />
                }
            ]
        }
    ])
  return (<RouterProvider router={myroute}/>)
}

export default MyApplicationRoutes
