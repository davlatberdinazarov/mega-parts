import React, { useEffect } from "react";
import {
  brakediscsImg,
} from "@/assets/images/z-index";
import { useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";


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
// const columnCount = calculateColumnCount(screenWidth);

export default function BrakeDisks({ brakediscs }) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (e) => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const columnCount = calculateColumnCount(screenWidth);

  return (
    <div className="bg-white h-full border-[1px] flex flex-col lg:flex-row select-none">
      {/* Main absorbes image */}
      <div className="lg:min-w-[260px] lg:h-[235px]  h-full">
        <div className="block lg:hidden">
          <a
            href=""
            className=" w-full text-lg text-indigo-400 py-2 bg-white flex items-center gap-3"
          >
            <p>Source now</p> <FaArrowRight className=" animate-bounce" />
          </a>
        </div>
        <div className="block lg:hidden sm:text-3xl text-2xl font-semibold py-4">
          Customer electronics
        </div>
        <div className=" w-[260px] h-[235px] hidden lg:block relative">
          <img className="w-full h-full" src={brakediscsImg} alt="absorbes" />
          <div className="h-full w-full  absolute top-0 p-6">
            <h2 className="text-xl font-semibold mb-2">Brake Discs</h2>
            <a href="#">
              <Button className="text-lg bg-white text-black hover:text-white">
                Source now
              </Button>
            </a>
          </div>
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
          {brakediscs.map((items) => {
            return (
              <SwiperSlide key={items.id} className="max-w-[223px] h-full border-r-[1px] border-[#E0E0E0] p-2 ">
                <Link className="flex justify-around" to={`product/${items.id}`}>
                  <div>
                    <p>{items.title}</p>
                    <div className=" text-slate-400">{items.subtitle}</div>
                  </div>
                  <div className="relative top-6 flex flex-col h-full justify-between max-w-[80px] max-h-[80px] p-1">
                    <div className="w-full h-12">{" "}</div>
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
          {brakediscs.map((items) => {
            return (
              <SwiperSlide key={items.id} className="max-w-[223px] h-full border-r-[1px] border-[#E0E0E0] p-2 ">
                <Link className="flex justify-around" to={`product/${items.id}`}>
                  <div>
                    <p>{items.title}</p>
                    <div className=" text-slate-400">{items.subtitle}</div>
                  </div>
                  <div className="relative top-6 flex flex-col h-full justify-between max-w-[80px] max-h-[80px] p-1">
                    <div className="w-full h-12">{" "}</div>
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
