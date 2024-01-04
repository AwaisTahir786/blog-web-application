import React from 'react'
import Link from 'next/link'
import ModeToggle from "@/components/modeToggle"
 

function Navbar() {
  return (
    <div className='flex w-full justify-between max-w-2xl mx-auto items-center px-4 py-5'>
        <Link href={"/"} className='font-bold text-3xl'>Awais<span className='text-primary'>Blog</span></Link>
        <ModeToggle/> 
    </div>
  )
}

export default Navbar;