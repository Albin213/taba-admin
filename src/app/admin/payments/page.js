"use client"

import React, { useState } from 'react'
import Navbar from '@/app/components/navbar/navbar'
import Sidebar from '@/app/components/sidebar/sidebar'
import PaymentTable from '@/app/components/paymentTable/PaymentTable'
import data from '../../components/requestTable/list' 

function Payments() {

  const [editPayment, setEditPayment] = useState(false)

  

  return (
    <div  className="w-full h-[100vh]">
        <div className="w-full h-[10%]  bg-slate-950">
            <Navbar/>
        </div>
        <div className="w-full h-[90%] flex" >
            <div className="w-[20%] h-full bg-slate-950">
                <Sidebar/>
            </div>
            <div className="w-[80%] h-full bg-admin p-10">
                
                <PaymentTable data={data} editPayment={editPayment} setEditPayment={setEditPayment}/> 



            </div>
        </div>
    </div>
  )
}

export default Payments