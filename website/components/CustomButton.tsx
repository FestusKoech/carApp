'use client';

import React from 'react'
 
import { CustomButtonProps } from '@/types';

const CustomButton = ( {title, containerStyles, handleClick }: 
  CustomButtonProps) => {
  return (
    <button 
    disabled = {false}
    type={'button'}
    className={`custom-btn ${containerStyles}`}
    onClick={() => {}}
    >
<span className={`flex-1`}>

</span>
    </button>
  )
}

export default CustomButton