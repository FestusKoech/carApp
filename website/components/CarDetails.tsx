'use client'
import {Fragment} from 'react'
import { CarProps } from '@/types';
import Image from 'next/image';
import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react';

interface CarDetailsProps {
    isOpen: boolean;
    closeModal : () => void;
    car :  CarProps;
}

const CarDetails = ({isOpen, closeModal, car} : CarDetailsProps) => {
  return (
    <>
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as='div' className='relative z-10'
            onClose={closeModal}>

                <TransitionChild 
                as={Fragment}
                enter ='ease-in ease-out duration-400'
                enterFrom='opacity-0'
                enterTo='opacity-100'
                leaveFrom='ease-in duration-200'
                leaveTo='opacity-0'
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25">

                    </div>


                </TransitionChild>

                <div className='fixed inset-0 overflow-y-auto'>
                    <div className="flex min-h-full items justify-center">
                    <TransitionChild 
                as={Fragment}
                enter ='ease-in ease-out duration-400'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leaveFrom='ease-in duration-200'
                leaveTo='opacity-0 scale-95'
                >
                <DialogPanel className = 'relative w-full max-w-lg max-h-[90vh] overflow-y-auto transfrom rounded-2xl bg-white text-left shadow-xsl transition-all flex-col gap-5'
                >
                    <button
                    type='button'
                    onClick={closeModal}
                    >

                        <Image src='/close.svg'
                        alt='close'
                        width={20}
                        height={20}
                        className='object-contain' />

                    </button>
                </DialogPanel>

                </TransitionChild>
                    

                    </div>

                </div>

            </Dialog>

        </Transition>
    </>
  )
}

export default CarDetails