import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CustomButton from './CustomButton'



const Navbar = () => {
  return (
    <header className='w-full absolute z-10 '>
        <nav className="max-w-[1440px] justify-between x-auto flex items-center
        sm:px-16 px-6 py-4 mt-3">

           <Link href='/' className='flex justify-center items-center'>
            <Image src='/logo.svg' alt='car' width={180} height={18} className='object-contain' />
           </Link>

           <CustomButton 
           title="Sign Up"
           btnType='button'
           containerStyles='text-btn-primary-blue text-gray-700 rounded-full  min-w-[130px]'
           />


        </nav>
        <hr />

        </header>
  )
}

export default Navbar