import React from 'react'
import Home from './components/Home'
import Registration from './components/CreateEmployee'
export default function App() {
  return (
    <div className='w-full h-svh bg-slate-950 text-white'>
      <Home />
      <Registration />
    </div>
  )
}
