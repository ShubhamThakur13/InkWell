import {createContext, useState } from "react";
 
export let MyBlogData = createContext();

export let MyBlogProvider = ({children}) => {
    const [Mode, setMode] = useState(true);
    const [Toggle, setToggle] = useState(false)
    const [Users, setUsers] = useState(JSON.parse(localStorage.getItem('Registered Users')) || []);
    const [LoginUser, setLoginUser] = useState(JSON.parse(localStorage.getItem('Logged User')) || null)
   return  <MyBlogData.Provider value={{Mode, setMode,Users, setUsers,LoginUser, setLoginUser}}>{children}</MyBlogData.Provider>
}