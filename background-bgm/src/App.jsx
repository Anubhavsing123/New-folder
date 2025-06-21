import { useState } from 'react'

import './App.css'

function App() {
const [color, setColor] = useState("olive")


  return (
    <div className='w-full h-screen duration-200 flex flex-col justify-end items-center '
      style={{ backgroundColor: color }}>
        <div className=' flex flex-wrap justify-center button-12 insert-x-0 px-2'>
          <div className=' flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded'>
            <button  className=" outline-none px-4 py-1  rounded-full text-white  shadow-lg bg-red-500"onClick={() => setColor("red")}>Red</button>
            <button className=" outline-none px-4 py-1  rounded-full text-white  shadow-lg bg-green-500" onClick={() => setColor("green")}>Green</button>
            <button className=" outline-none px-4 py-1  rounded-full text-white  shadow-lg bg-blue-500" onClick={() => setColor("blue")}>Blue</button>
            <button className=" outline-none px-4 py-1  rounded-full text-white  shadow-lg bg-yellow-500" onClick={() => setColor("yellow")}>Yellow</button>
            <button className=" outline-none px-4 py-1  rounded-full text-white  shadow-lg bg-purple-500" onClick={() => setColor("purple")}>Purple</button>
            </div>
          </div>
        </div>
        
    

  )
}

export default App
