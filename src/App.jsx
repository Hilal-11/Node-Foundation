import React from 'react'
import Home from './components/Home'
import Registration from './components/CreateEmployee'
import { Route , Routes , Link } from 'react-router-dom'
export default function App() {
  return (
    <div className='w-full h-svh bg-slate-950 text-white'>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Regestration' element={<Registration />}/>
      </Routes>
    </div>
  )
}
