import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{
        backgroundImage: "url(src/assets/img2.png)"
      }} className='h-125 w-full bg-cover bg-center'>
        <div className='bg-gray-700 opacity-50 h-full w-full'>

        </div>
      </div>
    </>
  )
}

export default App
