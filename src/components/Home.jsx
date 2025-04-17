import React from 'react'

function Home() {

    
  return (
    <div>
        <div className='w-[80%] mx-auto py-6'>
        {/* HEADER */}
        <div className='flex justify-between'>
          <div className=''>
            <h1 className='font-bold text-4xl'>Employees</h1>
            <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, iusto.</p>
          </div>
          <div>
            <button className='bg-blue-500 rounded-md px-10 py-4 font-bold'>Add Employee</button>
          </div>
        </div>
        {/* EMPLOYEES SECESSION */}
        <div className='w-full h-[400px] bg-slate-900 shadow-sm shadow-gray-300 my-20 rounded-2xl'> 
          {/* FIXED HEADER OF DATA */}
          <div className='flex justify-left gap-[33%] bg-slate-700 px-4 py-5 font-medium rounded-tl-2xl rounded-tr-2xl'>
            <div>Employee</div>
            <div>Title</div>
            <div>Role</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home