import { CircleUser, FileVideo, PanelsTopLeft, ShieldPlus } from 'lucide-react'
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
            path:'/create-new',
            icon:FileVideo
        },
        {
            id:3,
            name:'Upgrade',
            path:'/upgrade',
            icon:ShieldPlus
        },
        {
            id:4,
            name:'Account',
            path:'/account',
            icon:CircleUser
        },
    ]
  return (
    <div className='md:w-64 shadow-md h-screen p-5'>
      <div>
        {menuOptions.map((item,index)=>(
        <div className='flex items-center gap-3 p-3'>
            <item.icon/>
            <h2>{item.name}</h2>
        </div>
        ))}
      </div>
    </div>
  )
}

export default SideNav
