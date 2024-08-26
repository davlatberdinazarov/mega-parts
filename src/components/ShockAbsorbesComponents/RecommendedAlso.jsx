import React, { useEffect } from 'react'

import { part1, part2, part3, part4, part5, part6 } from '@/assets/images/z-index'
import { useRef, useState } from 'react';
// Import Swiper React components

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import { Swiper, SwiperSlide} from 'swiper/react';




// import required modulesfv
import { FreeMode, Pagination} from 'swiper/modules';

function calculateColumnCount(screenWidth) {
    let columnCount;
    if (screenWidth > 768) {
        columnCount = 4;
    } else if (screenWidth > 640 && screenWidth < 768) {
        columnCount = 3;
    } else if (screenWidth <= 640) {
        columnCount = 2;
    } else {
        columnCount = 2;
    }
    return columnCount;
}
export default function RecommendedAlso() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const columnCount = calculateColumnCount(screenWidth);

  return (
    <div className='bg-white h-full border-y-[1px] flex flex-col lg:flex-row my-3 select-none'>
        {/* Deals main timer */}
        
        <h1 className='my-2 font-semibold'>You may also like</h1>
        {/* Pruducts */}
        <Swiper
            className='mySwiper w-full h-[235px]  border-y-[1px] border-l-[1px] border-slate-400 flex'
            slidesPerView={ columnCount }
            freeMode={true}
            pagination={false}
            modules={[FreeMode, Pagination]}
        >
            <SwiperSlide className='max-w-[179px] h-full border-r-[1px] border-slate-400 p-2 flex flex-col items-center justify-around'>
                <img className='max-h-24' src={part1} alt="part1" />
                <p>Brake Disc for Damas </p>
                <div>lorem ismpum</div>
            </SwiperSlide>
            <SwiperSlide className='max-w-[179px] h-full border-r-[1px] border-slate-400 p-2 flex flex-col items-center justify-around'>
                <img className='max-h-24' src={part2} alt="part1" />
                <p>Brake Disc for Damas </p>
                <div>lorem ismpum</div>
            </SwiperSlide>
            <SwiperSlide className='max-w-[179px] h-full border-r-[1px] border-slate-400 p-2 flex flex-col items-center justify-around'>
                <img className='max-h-24' src={part3} alt="part1" />
                <p>Brake Disc for Damas </p>
                <div>lorem ismpum</div>
            </SwiperSlide>
            <SwiperSlide className='max-w-[179px] h-full border-r-[1px] border-slate-400 p-2 flex flex-col items-center justify-around'>
                <img className='max-h-24' src={part4} alt="part1" />
                <p>Brake Disc for Damas </p>
                <div>lorem ismpum</div>
            </SwiperSlide>
            <SwiperSlide className='max-w-[179px] h-full border-r-[1px] border-slate-400 p-2 flex flex-col items-center justify-around'>
                <img className='max-h-24' src={part5} alt="part1" />
                <p>Brake Disc for Damas </p>
                <div>lorem ismpum%</div>
            </SwiperSlide>
            <SwiperSlide className='max-w-[179px] h-full border-r-[1px] border-slate-400 p-2 flex flex-col items-center justify-around'>
                <img className='max-h-24' src={part6} alt="part1" />
                <p>Brake Disc for Damas </p>
                <div>lorem ismpum</div>
            </SwiperSlide>
        </Swiper>

    </div>
  )
}
