import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CustomButton from './CustomButton'



const Navbar = () => {
  return (
    <header className='w-full absolute z-10 '>
        <nav className="max-w-[1440px] justify-betweenmx-auto flex items-center
        sm:px-16 px-6 py-4 mt-10">

           <Link href='/' className='flex justify-center items-center'>
            <Image src='/logo.svg' alt='car' width={110} height={18} className='object-contain' />
           </Link>

           <CustomButton 
           title="sign In"
           btnType='button'
           containerStyles='text-btn-primary-blue rounded-full bg-white min-w-[130px]'
           />


        </nav>

        </header>
  )
}

export default Navbar