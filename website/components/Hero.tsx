'use client';
import React from 'react'
import Image from 'next/image'
import CustomButton from './CustomButton'

const Hero = () => {

  const handleClick=() =>{

  }
  return (
    <div className='hero'>
       <div className='flex-1 pt-20 padding-x'>

        {/* <h1 className="hero__title">
            This is a customizable website using Next-JS, Typescript and React.

        </h1>
        <p className="hero__subtitle">
            Change the subtitle to suit your app. This is a reusable app, with 
            reusable components
        </p>
        <CustomButton 
        title=  'Explore Cars'
        containerStyles='bg-primary-blue text-white rounded-full mt-10'
        handleClick={handleClick}

        /> */}

       </div>

       {/* <div className="hero__image-container">
        <div className="hero__image">
          <Image src='/hero.png' alt='hero' fill className='object-contain'/>
          </div>
          <div className='hero__image-overlay'/>
          
        
       </div> */}
       
       </div>
  )
}

export default Hero