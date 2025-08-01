import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Home() {

  const userImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnC6su3Zpt1mX3oE8d8yssz66y42m_XV3ZevBCWQgMcpOeWfswSvoIYI-4d9zLczIevtU&usqp=CAU'
  const navigate = useNavigate();
  const [employee , setEmployee] = useState()
  const getAllData = async () => {
    try {
      const getEmployee = await fetch(
        `http://localhost:4000/api/v1/getAllEmployees`,
        {
          method: 'GET',
          headers: {
            "Content-type": "application/json"
          },
        }
      )
      const response = await getEmployee.json();
      setEmployee(response.data)
    }catch(error) {
      console.log(error.message)
    }
  }
useEffect(() => {
  getAllData();
}, [])

  return (
    <div>
        <div className='w-[80%] mx-auto py-6'>
        {/* HEADER */}
        <div className='flex justify-between flex-wrap gap-0'>
          <div className=''>
            <h1 className='font-bold text-4xl text-center lg:text-left'>Employees</h1> <br />
            <p className='text-md '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur ipsa unde magni deleniti labore <br /> nihil sapiente quisquam blanditiis porro quod mollitia tempore debitis explicabo iure quia aperiam...</p>
          </div>
          <div className='w-full lg:w-auto py-4'>
            <button className='w-full bg-blue-500 rounded-md lg:px-10 py-3 font-bold cursor-pointer'
              onClick={() => { navigate('/Regestration') }}
            >Add Employee</button>
          </div>
        </div>
        {/* EMPLOYEES SECESSION */}
        {/* bg-slate-900 shadow-sm shadow-gray-300 */}
        <div className='w-full h-auto  my-10 rounded-2xl'> 
          {/* FIXED HEADER OF DATA */}
          <div className='flex justify-between  bg-slate-700 px-10 py-5 font-medium rounded-tl-2xl rounded-tr-2xl'>
            <div>Employee</div>
            <div>Title</div>
            <div>Role</div>
          </div>

        {/*  Regestered Users */}
         <div className='space-y-2'>
        {
          employee?.map((users , index) => (
            <div key={index} className='flex justify-between px-10 py-6 bg-slate-950'>
              <div className='flex gap-3 font-bold text-md'>
                <img src={userImage} alt="IM" className='text-center flex items-center w-[30px] h-[30px] rounded-full ring-1 bg-amber-400' />
                {users.employee_name}
              </div>
              <div className='font-bold text-md'>{users.employee_department}</div>
              <div className='font-bold text-md'>{users.employee_role}</div>
            </div>
          ))
        }
         </div>
        </div>
      </div>
    </div>
  )
}

export default Home