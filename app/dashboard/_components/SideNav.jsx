"use client"
import { CircleUser, FileVideo, PanelsTopLeft, ShieldPlus } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function SideNav() {
    const menuOptions = [
        {
            id:1,
            name:'Dashboard',
            path:'/dashboard',
            icon:PanelsTopLeft
        },
        {
            id:2,
            name:'Create New',
            path:'/dashboard/create-new',
            icon:FileVideo
        },
        {
            id:3,
            name:'Upgrade',
            path:'/dashboard/upgrade',
            icon:ShieldPlus
        },
        {
            id:4,
            name:'Account',
            path:'/dashboard/account',
            icon:CircleUser
        },
    ]
    const pathName = usePathname();
  return (
    <div className='md:w-64 shadow-md h-screen p-5'>
      <div className='grid gap-3'>
        {menuOptions.map((item,index)=>(
          <Link href={item.path} key={index}>
            <div className={`flex items-center gap-3 p-3 hover:bg-primary hover:text-white ${pathName==item.path && `bg-primary text-white`} cursor-pointer rounded-md`}>
                <item.icon/>
                <h2>{item.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SideNav
