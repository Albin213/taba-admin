import React from 'react'
import Navbar from '@/app/components/navbar/navbar'
import Sidebar from '@/app/components/sidebar/sidebar'
import PasswordReset from '@/app/components/passwordReset/PasswordReset'

function page() {
  return (
    <div  className="w-full h-[100vh]">
    <div className="w-full h-[10%]  bg-slate-950">
      <Navbar/>
    </div>
    <div className="w-full h-[90%] flex" >
      <div className="w-[20%] h-full bg-slate-950">
        <Sidebar/>
      </div>
      <div className="w-[80%] h-full flex justify-center items-center bg-[#d0d6f6]">
         <PasswordReset/>
 
      </div>
    </div>
  </div>
  )
}

export default page