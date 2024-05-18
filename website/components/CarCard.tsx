'use client';
import {useState} from 'react';
import Image from 'next/image';
import { CarProps } from '@/types';
import CustomButton from './CustomButton';
import { calculateCarRent } from '@/utils';

interface CarCardProps{
    car: CarProps;
}


const CarCard = ({car}: CarCardProps) => {
  const {city_mpg, year, make,model,  transmission, drive} = car;

  const carRent = calculateCarRent(city_mpg, year);

  return (
    <div className='car-card group'>

      <div className="car-card__content">
        <h3 className='car-card__content-title text-gray-900'>
          {make} {model}
        </h3> 
      </div>

      <p className='flex mt-6 text-[32px] font-extrabold'>
      <span className='text-gray-700 self-start text-[8px]'>
        $
        </span>
        <span className='text-green-700 self-start text-[14px] font-semibold'>
          {carRent}
        </span>
       
        <span className='text-gray-700 self-end text-[8px]'>
        /day
        </span>
      </p>
      

    </div>
  )
}

export default CarCard