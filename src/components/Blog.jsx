import { User } from 'lucide-react'
import React from 'react'



const Blog = () => {
  return (
    <div>
      <div className="top">
        <p>React</p>
        <p>JavaScript</p>
        <p>Web Development</p>

        <div className="title">
            <h1>Getting Started With react Hooks</h1>
        </div>
      </div>

      <div className="middle">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium veritatis nisi sapiente vel praesentium voluptates libero culpa numquam quisquam illo?
      </div>

      <div className="bottom">
        <p><span>{User}</span></p>
      </div>
    </div>
  )
}

export default Blog
