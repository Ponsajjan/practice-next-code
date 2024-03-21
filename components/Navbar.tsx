import Image from 'next/image'
import React from 'react'

function Navbar() {
  return (
    <div className='flex justify-between py-4 pr-4 pl-14 md:pl-4 h-64px bg-white'>
        <Image 
          src="/logo.png" 
          height="40" 
          width="125" 
          alt="logo" 
        />
        <div>
            <p className='w-8 h-8 rounded-full bg-blue-500'/>
        </div>
    </div>
  )
}

export default Navbar