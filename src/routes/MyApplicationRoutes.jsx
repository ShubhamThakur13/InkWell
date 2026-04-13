import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from '../pages/Login'
import MainPageLayout from '../layouts/MainPageLayout'
import BlogList from '../components/BlogList'
import SignUp from '../pages/SignUp'
import Home from '../pages/Home'
import Dashboard from '../pages/Dashboard'
import MainDashboard from '../layouts/MainDashboard'

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
        },

        {
            path: '/dashboard',
            element:<MainDashboard/>,
            children:[
                {
                    path: '',
                    element:<Dashboard/>
                }
            ]
        }
    ])
  return (<RouterProvider router={myroute}/>)
}

export default MyApplicationRoutes
