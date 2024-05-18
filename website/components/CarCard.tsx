'use client';
import { useState } from 'react';
import Image from 'next/image';
import { CarProps } from '@/types';
import CustomButton from './CustomButton';
import { calculateCarRent } from '@/utils';


interface CarCardProps {
  car: CarProps;
}


const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;

 const [isOpen, setIsOpen] = useState(false);

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

      <div className="relative w-full h-40 my-3 object-contain">
        <Image src='/hero.png' fill priority alt='car'
          className='object-contain' />

      </div>
      <div className='relative flex w-full mt-2'>
        <div className='flex group-hover:invisible w-full justify-between text-grey'>
          <div className='flex flex-col justify-center items-center gap-2'>
            <Image src='/steering-wheel.svg' width={20} height={20} alt='steering wheel' />
            <p className='text-[14px] leading-[17px]'>
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="car-card__icon">
            <Image src="/tire.svg" width={20} height={20} alt="seat" />
            <p className="car-card__icon-text">{drive.toUpperCase()}</p>
          </div>
          <div className="car-card__icon">
            <Image src="/gas.svg" width={20} height={20} alt="seat" />
            <p className="car-card__icon-text">{city_mpg} MPG</p>
          </div>
        </div>

        <div className="car-card__btn-container">
          <CustomButton
            title='View More'
            containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
            textStyles='text-white text-[14px] leading-[17px] font-bold'
           
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>


    </div>
  )
}

export default CarCard





