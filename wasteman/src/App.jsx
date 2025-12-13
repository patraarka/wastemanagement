import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{
        backgroundImage: "url(src/assets/img2.png)"
      }} className='h-125 w-full bg-cover bg-center'>
        <div className='bg-black/50 h-full w-full'>
          <nav className='flex p-5'>
            <div><img alt="logo" src="src/assets/logo.png" h={100} w={100} className="h-15 w-15"/>
            </div>
            <div>
              <p className='text-3xl text-blue-500 font-bold py-0 my-0'>WASTE</p>
              <p className='text-xl text-blue-500 py-0 my-0'>Man</p>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}

export default App
