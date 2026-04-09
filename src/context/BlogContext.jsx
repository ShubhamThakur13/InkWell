import {createContext, useState } from "react";
 
export let MyBlogData = createContext();

export let MyBlogProvider = ({children}) => {
    const [Mode, setMode] = useState(true);
    const [Users, setUsers] = useState(JSON.parse(localStorage.getItem('Registered Users')) || []);
    const [LoginUser, setLoginUser] = useState(null)
   return  <MyBlogData.Provider value={{Mode, setMode,Users, setUsers,LoginUser, setLoginUser}}>{children}</MyBlogData.Provider>
}