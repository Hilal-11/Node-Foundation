import React from 'react'
import { useNavigate } from 'react-router-dom'
function Home() {

  const navigate = useNavigate();

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
            <button className='bg-blue-500 rounded-md px-10 py-4 font-bold'
              onClick={() => { navigate('/Regestration') }}
            >Add Employee</button>
          </div>
        </div>
        {/* EMPLOYEES SECESSION */}
        <div className='w-full h-[400px] bg-slate-900 shadow-sm shadow-gray-300 my-20 rounded-2xl'> 
          {/* FIXED HEADER OF DATA */}
          <div className='flex justify-between  bg-slate-700 px-10 py-5 font-medium rounded-tl-2xl rounded-tr-2xl'>
            <div>Employee</div>
            <div>Title</div>
            <div>Role</div>
          </div>

        {/*  Regestered Users */}

         <div className='space-y-2'>
          <div className='flex justify-between px-10 py-6 bg-slate-950'>
              <div className='flex gap-3 font-bold text-md'>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnC6su3Zpt1mX3oE8d8yssz66y42m_XV3ZevBCWQgMcpOeWfswSvoIYI-4d9zLczIevtU&usqp=CAU" alt="IM" className='text-center flex items-center w-[30px] h-[30px] rounded-full ring-1 bg-amber-400' />
              Hilal Ahmad
              </div>
              <div className='font-bold text-md'>Computer Science </div>
              <div className='font-bold text-md'>Software Development</div>
            </div>


         </div>


        </div>
      </div>
    </div>
  )
}

export default Home