import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div className='p-3 px-5 flex items-center justify-between shadow-md'>
      <div className='flex gap-3 items-center'>
        <Image src={'/logo.svg'} width={50} height={50} alt='logo'/>
        <h2 className='font-bold text-xl'>AI short vid</h2>
      </div>
      <div className='flex items-center gap-3'>
        <Button>Dashboard</Button>
        <UserButton/>
      </div>
    </div>
  )
}

export default Header
