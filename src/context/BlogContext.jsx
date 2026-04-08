import {createContext, useState } from "react";
 
export let MyBlogData = createContext();

export let MyBlogProvider = ({children}) => {
    const [Mode, setMode] = useState(true);
   return  <MyBlogData.Provider value={{Mode, setMode}}>{children}</MyBlogData.Provider>
}