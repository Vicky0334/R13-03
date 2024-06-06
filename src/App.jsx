import { useState } from 'react'
import { useselector} from "react-redux"

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-[70%] h-[70%] mt-10 ml-20 text-center bg-green-300'>
     <h1 className='text-6xl'>0</h1>
     <button className='px-7 py-2 rounded-full  bg-blue-500'>submit</button>
        </div>
  )
}

export default App
