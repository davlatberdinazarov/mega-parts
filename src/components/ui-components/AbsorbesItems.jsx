import React, { useEffect } from "react";
import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { absorbesImg } from "@/assets/images/z-index";

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

// data

export default function AbsorbesItems({ absorbes }) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (e) => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const columnCount = calculateColumnCount(screenWidth);

  return (
    <div className="bg-white h-full border-y-[1px] flex flex-col lg:flex-row ">
      {/* Main absorbes image */}
      <div className="lg:min-w-[260px] lg:h-[235px]  h-full">
        <div className="block lg:hidden sm:text-3xl text-2xl font-semibold py-4">
          Home and outdoor
        </div>
        <div className=" w-[260px] h-[235px] hidden lg:block">
          <img className="w-full h-full" src={absorbesImg} alt="absorbes" />
        </div>
      </div>

      {/* Pruducts */}
      <div className=" overflow-hidden">
        <Swiper
          className="mySwiper w-full h-[118px]  border-t-[1px] border-l-[1px] border-[#E0E0E0] flex"
          slidesPerView={columnCount}
          freeMode={true}
          pagination={false}
          modules={[FreeMode, Pagination]}
        >
          {absorbes.map((items) => {
            return (
              <SwiperSlide
                key={items.id}
                className="max-w-[223px] h-full border-r-[1px] border-[#E0E0E0] p-2 "
              >
                <Link
                  className="flex justify-around"
                  to={`product/${items.id}`}
                >
                  <div>
                    <p>{items.title}</p>
                    <div className=" text-slate-400">{items.subtitle}</div>
                  </div>
                  <div className="relative top-6 flex flex-col h-full justify-between max-w-[80px] max-h-[80px] p-1">
                    <div className="w-full h-12"> </div>
                    <img
                      className="h-full w-full hover:scale-[1.1] hover:transition hover:duration-200 hover:ease-linear"
                      src={items.img}
                      alt="part1"
                    />
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* 2 data */}

        <Swiper
          className="mySwiper w-full h-[118px]  border-y-[1px] border-l-[1px] border-[#E0E0E0] flex"
          slidesPerView={columnCount}
          freeMode={true}
          pagination={false}
          modules={[FreeMode, Pagination]}
        >
          {absorbes.map((items) => {
            return (
              <SwiperSlide
                key={items.id}
                className="max-w-[223px] h-full border-r-[1px] border-[#E0E0E0] p-2 "
              >
                <Link
                  className="flex justify-around"
                  key={items.id}
                  to={`product/${items.id}`}
                >
                  <div>
                    <p>{items.title}</p>
                    <div className=" text-slate-400">{items.subtitle}</div>
                  </div>
                  <div className="relative top-6 flex flex-col h-full justify-between max-w-[80px] max-h-[80px] p-1">
                    <div className="w-full h-12"> </div>
                    <img
                      className="h-full w-full hover:scale-[1.1] hover:transition hover:duration-200 hover:ease-linear"
                      src={items.img}
                      alt="part1"
                    />
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
