import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/effect-fade';

// import required modules
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper/modules";

import { Button } from "../ui/button";
import {
  HomepageBanner,
  HomepageBanner2,
  HomepageBanner3,
  HomepageBanner4,
  HomepageBanner5,
  HomepageBanner6,
  Avatar,
} from "../../assets/images/z-index";
// import { Carousel } from "flowbite-react";
import { Link } from "react-router-dom";

const navs = [
  { id: 1, name: "Automobile"},
  { id: 2, name: "Piston"},
  { id: 3, name: "Bus"},
  { id: 4, name: "Car"},
  { id: 5, name: "Air Filter"},
  { id: 6, name: "Scooter"},
  { id: 7, name: "Telephone"},
  { id: 8, name: "Tablets"},
]


export default function HomePageBanner() {
  const [activeNav, setActiveNav ] = useState("Automobile") 
  return (
    <div className="bg-white rounded-lg lg:p-3 grid grid-cols-5 gap-2 w-full h-[250px] md:h-[400px]">
      {/* sidebar */}
      <div className="hidden lg:block w-[220px] mr-3">
        <ul className="w-full flex flex-col gap-1 rounded-lg select-none">
          {navs.map((navs, index) => {
            return (
              <li key={index} onClick={() => setActiveNav(navs.name)} className={`w-full ${ activeNav == navs.name ? `active-navbar` : null} p-2 rounded-md`}>
                {navs.name}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Image */}
      <div className="xl:col-span-3 lg:col-span-4 col-span-5 relative rounded-md h-[250px] md:h-[380px] bg-blue-600">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          pagination={{
            type: 'progressbar',
          }}
          navigation={false}
          modules={[EffectFade, Autoplay, Pagination, Navigation]}
          className="mySwiper rounded-md w-full h-full"
        >
          <SwiperSlide className="text-center flex justify-center items-center" >
            <img className="block object-cover w-full h-full" src={HomepageBanner} alt="img1" />
          </SwiperSlide>
          <SwiperSlide className="text-center flex justify-center items-center">
            <img className="block object-cover w-full h-full " src={HomepageBanner5} alt="img1" />
          </SwiperSlide>
          <SwiperSlide className="text-center flex justify-center items-center">
            <img className="block object-cover w-full h-full " src={HomepageBanner2} alt="img1" />
          </SwiperSlide>
          <SwiperSlide className="text-center flex justify-center items-center">
            <img className="block object-cover w-full h-full " src={HomepageBanner4} alt="img1" />
          </SwiperSlide>
          <SwiperSlide className="text-center flex justify-center items-center">
            <img className="block object-cover w-full h-full " src={HomepageBanner3} alt="img1" />
          </SwiperSlide>
          <SwiperSlide className="text-center flex justify-center items-center">
            <img className="block object-cover w-full h-full " src={HomepageBanner6} alt="img1" />
          </SwiperSlide>
          
        </Swiper>
        <div className="h-[20%] w-[60%] md:p-8 p-4 absolute top-0 z-10">
          <div>
            <h3 className="md:text-2xl text-lg text-white font-thin">
              Latest trending
            </h3>
            <h2 className="md:text-3xl text-xl text-white font-bold">
              Electronic items
            </h2>
            <Link to="#">
              <Button className="bg-white hidden md:block hover:text-white text-black md:my-4 mt-3">
                Learn More
              </Button>
            </Link>
            <Link
              to="/homepage/blogs"
              className="text-indigo-500 text-lg hover:text-indigo-900 block md:hidden"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      <div className="hidden xl:block col-span-1 ml-4">
        <div className="w-[230px] flex flex-col gap-1 rounded-lg ">
          <div className="w-full p-1 bg-[#E3F0FF] flex flex-col gap-1 rounded-md">
            <div className="flex gap-3 items-center">
              <div>
                <img className="w-12" src={Avatar} alt="avatar"/>
              </div>
              <div>
                <h2 className="text-2xl">Hi, user</h2>
                <p>let's get started</p>
              </div>
            </div>
            <Button className="text-lg">Join now</Button>
            <Link to="/login">
              <Button
                variant="outline"
                className="text-lg w-full text-indigo-500"
              >
                Login
              </Button>
            </Link>
          </div>

          {/* Discount */}
          <div className="bg-[#F38332] py-2 pl-3 pr-8 text-white rounded-lg">
            <p className="text-[20px] min-h-[95px]">
              Get US $10 off with a new supplier
            </p>
          </div>

          {/* Quote */}
          <div className="bg-[#55BDC3] py-2 pl-4 pr-8 text-white rounded-lg">
            <p className="text-[20px] min-h-[95px]">
              Send quotes with supplier preferences
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
