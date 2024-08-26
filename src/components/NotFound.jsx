import React from 'react'
import { RxDashboard } from "react-icons/rx";
import { n404, p404, notfound } from '@/assets/images/z-index';

export default function NotFound() {
  return (
    <div className='px-2 py-12 md:p-20 max-h-screen w-full'>
        <div className='flex justify-between'>
            <RxDashboard className='text-3xl'/>
            <div className='w-16'>
                <img className=' hidden lg:block' src={n404} alt="404" />
            </div>
        </div>
        <div className='pt-12 relative h-full w-full flex flex-col-reverse lg:flex-row justify-center lg:justify-evenly items-center'>
            <div className='block lg:hidden'>
                    <p className='text-xl'>Oh No! Something went wrong</p>
                    <h3 className='text-xl font-bold'>Please truy again later !</h3>
            </div>
            <div className='relative -top-8 left-4 lg:w-[416px] w-[290px]'>
                <img src={notfound} alt="" />
            </div>
            <div className=''>
                <div className=''>
                    <p className='text-[#464F72] lg:text-8xl text-7xl font-bold'>404</p>
                    <img className='relative -top-[59px] min-w-1 right-[40px]' src={p404} alt="person" />
                </div>
                <div className='hidden lg:block relative -top-24'>
                    <p className='text-2xl'>Oh No! Something went wrong</p>
                    <h3 className='text-2xl font-bold'>Please truy again later !</h3>
                </div>
            </div>

        </div>
    </div>
  )
}
