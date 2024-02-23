"use client"

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import { FaHome,FaRegIdCard,FaList,FaRedoAlt } from "react-icons/fa";
import { HiCurrencyRupee , HiUserGroup } from "react-icons/hi2";
import { VscBroadcast } from "react-icons/vsc";


function Sidebar() {

  const pathname = usePathname()

  return (
    <div className='w-full h-full pt-20'>
      <ul className='w-full text-white'>

        <Link href="/admin">
          <li className={`${pathname === '/admin' ? ' h-[70px] text-[1.2rem] border-b-2 flex items-center px-4 bg-stone-600 hover:text-black hover:bg-stone-200' : 'h-[70px] text-[1.2rem] border-b-2 flex items-center px-4 hover:text-black hover:bg-stone-400'}`}>
            <FaHome className="text-3xl me-4"/> Home
          </li>
        </Link>

        <Link href="/admin/memberRequest">
          <li className={`${pathname.startsWith('/admin/memberRequest') ? ' h-[70px] text-[1.2rem] border-b-2 flex items-center px-4 bg-stone-600 hover:text-black hover:bg-stone-200' : 'h-[70px] text-[1.2rem] border-b-2 flex items-center px-4 hover:text-black hover:bg-stone-400'}`}>
            <FaList className="text-3xl me-4"/> Members Approval
          </li>
        </Link>

        <Link href="/admin/membersList">
          <li className={`${pathname.startsWith('/admin/membersList') ? ' h-[70px] text-[1.2rem] border-b-2 flex items-center px-4 bg-stone-600 hover:text-black hover:bg-stone-200' : 'h-[70px] text-[1.2rem] border-b-2 flex items-center px-4 hover:text-black hover:bg-stone-400'}`}> 
            <FaRegIdCard className="text-3xl me-4"/>Members List
          </li>
        </Link>

        <Link href="/admin/payments">
          <li className={`${pathname.startsWith('/admin/payments') ? ' h-[70px] text-[1.2rem] border-b-2 flex items-center px-4 bg-stone-600 hover:text-black hover:bg-stone-200' : 'h-[70px] text-[1.2rem] border-b-2 flex items-center px-4 hover:text-black hover:bg-stone-400'}`}>
            <HiCurrencyRupee className="text-4xl me-4"/>Payment
          </li>
        </Link>

        <Link href="/admin/executiveCommittee">
          <li className={`${pathname.startsWith('/admin/executiveCommittee') ? ' h-[70px] text-[1.2rem] border-b-2 flex items-center px-4 bg-stone-600 hover:text-black hover:bg-stone-200' : 'h-[70px] text-[1.2rem] border-b-2 flex items-center px-4 hover:text-black hover:bg-stone-400'}`}>
            <HiUserGroup className="text-4xl me-4"/>Executive Committee
          </li>
        </Link>  

        <Link href="/admin/notificationBroadcast">
          <li className={`${pathname.startsWith('/admin/notificationBroadcast') ? ' h-[70px] text-[1.2rem] border-b-2 flex items-center px-4 bg-stone-600 hover:text-black hover:bg-stone-200' : 'h-[70px] text-[1.2rem] border-b-2 flex items-center px-4 hover:text-black hover:bg-stone-400'}`}>
            <VscBroadcast className="text-4xl me-4"/>Notification & Broadcast
          </li>
        </Link>

        <Link href="/admin/resetPassword">
          <li className={`${pathname.startsWith('/admin/resetPassword') ? ' h-[70px] text-[1.2rem] border-b-2 flex items-center px-4 bg-stone-600 hover:text-black hover:bg-stone-200' : 'h-[70px] text-[1.2rem] border-b-2 flex items-center px-4 hover:text-black hover:bg-stone-400'}`}>
            <FaRedoAlt className="text-3xl me-4"/>Password Reset
          </li>
        </Link>     


      </ul>
    </div>
  )
}

export default Sidebar