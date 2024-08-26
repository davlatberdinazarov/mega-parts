import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { MdEmail } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";

export default function Subscribe() {
  return (
    <div className='bg-[#EFF2F4] w-full h-[190px] '>
        <div className='w-full md:w-1/2 h-full mx-auto p-8 text-center'>
          <h1 className='font-bold text-2xl my-1'>Subscribe on our newsletter</h1>
          <p className='text-slate-500'>Get daily news on upcoming offers from many suppliers all over the world</p>
          <div>
          <form action="" className='flex items-center justify-center mt-5'>
            <div className='flex w-64 h-full items-center gap-2 px-2 bg-white border-2 border-slate-400 mx-2 focus:border-indigo-500 rounded-md'>
              <span  className='text-2xl text-slate-400'><MdOutlineMailOutline/></span> <input className='h-10 border-none focus:outline-none' type="email" name="email" placeholder="Email"/>
            </div>
            <Button className=" text-lg p-3">Subscribe</Button>
          </form>
          </div>
        </div>
    </div>
  )
}
