import React, { useContext } from "react";
import { MyBlogData } from "../context/BlogContext";
import { Calendar, User } from "lucide-react";

const BlogList = () => {
    const {Mode} = useContext(MyBlogData);
  return (
    <div className= {Mode ? `group w-[300px] h-[300px] flex flex-col justify-between p-3 rounded-xl bg-white shadow border border-white hover:border-[#0056A4]`: `group w-[300px] h-[300px] flex flex-col justify-between p-3 rounded-xl bg-[#0A0E11] border border-black hover:border-[#008B74]`}>
      <div className="top flex flex-col gap-2">
        <div className="flex gap-2 flex-wrap">
        <p className= { Mode ? `p-0.5 px-1 rounded-2xl text-xs bg-gray-300`: `p-0.5 px-1 rounded-2xl text-xs bg-gray-800`}>React</p>
        <p className= { Mode ? `p-0.5 px-1 rounded-2xl text-xs bg-gray-300`: `p-0.5 px-1 rounded-2xl text-xs bg-gray-800`}>JavaScript</p>
        <p className= { Mode ? `p-0.5 px-1 rounded-2xl text-xs bg-gray-300`: `p-0.5 px-1 rounded-2xl text-xs bg-gray-800`}>Web Development</p>
        </div>

        <div className=''>
          <h1 className= {Mode ? `group-hover:text-[#0056A4] font-bold text-xl`:`group-hover:text-[#008B74] font-bold text-xl`}>Getting Started With react Hooks</h1>
        </div>
      </div>

      <div className="middle font-light">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
      </div>

      <div className="bottom flex items-center justify-between font-light">
          <span className="flex"><User/>RangerOp</span>
           <span className="flex"><Calendar/>April8, 2026</span>
      </div>
    </div>
  );
};

export default BlogList;
