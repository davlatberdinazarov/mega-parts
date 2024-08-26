import React, { useEffect, useState } from "react";
import { blog1, blog2, blog3, blog4, blog5 } from "@/assets/images/z-index";
import { FaAngleLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function calculatescreenColWidth(screenWidth) {
    let screenColWidth;
    if (screenWidth >= 768) {
      screenColWidth = false;
    } else {
      screenColWidth = true;
    }
    return screenColWidth;
  }

import AOS from 'aos';
import 'aos/dist/aos.css'

export default function BlogPage() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
      AOS.init({
        duration: 2000
      });
    },[])

    useEffect(() => {
      const handleResize = () => {
        setScreenWidth(window.innerWidth);
      };
  
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  
    const screenColWidth = calculatescreenColWidth(screenWidth);
  
  return (
    <div data-aos="fade-up" className="font-sen">
      {screenColWidth && (
        <header data-aos="fade-up" className="flex px-3 text-2xl justify-between items-center pt-8 fixed top-0 w-full bg-gray-100 pb-2">
          <Link to="/homepage">
            <FaAngleLeft />
          </Link>
          <h3 className="font-bold text-center">Blogs</h3>
          <div>{""}</div>
        </header>
      )}
      {/* banner */}
      <div className="bg-[#F4F0F8] h-full md:h-[519px] mb-12">
        <div className="flex md:flex gap-1 md:gap-3 justify-between md:container lg:px-12 py-[84px] px-[15px]">
          <div className="w-full md:w-1/2 flex flex-col gap-20">
            <div>
              <h1 className="text-3xl  font-bold">
                Step-by-step guide to choosing great font pairs
              </h1>
              <p className="my-4">By John Doe l May 23, 2022 </p>

              <p className="hidden md:block">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident.
              </p>
            </div>
            <button className="py-3 px-8 w-[170px] bg-[#FFD050] flex items-center gap-2 active:scale-[1.02]">
              Read more <FaChevronRight/>
            </button>
          </div>
          <div className="w-[515px] h-[395px] hidden md:block">
            <img className="w-full" src={blog1} alt="blog1" />
          </div>
        </div>
      </div>

      <div className=" md:container lg:px-12 px-[15px] ">
        <h1 className="text-4xl font-bold text-[#0A74FF] border-b-[1px] pb-6 border-[#DEE2E7]">
          All posts
        </h1>

        <div className="my-6 w-full lg:w-[90%]">
          <div data-aos="fade-up" className="flex flex-col md:flex-row gap-8 items-center my-12">
            <div className="mx-auto">
              <img className="min-w-[400px]" src={blog2} alt="blog2" />
            </div>
            <div className="flex flex-col space-y-6">
              <h4
                className="text-[16px] font-sans font-semibold uppercase text-[#592EA9]"
                style={{ letterSpacing: "3px" }}
              >
                Startup
              </h4>
              <h1 className="text-3xl font-bold ">
                Design tips for designers that cover everything you need
              </h1>

              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident.
              </p>
            </div>
          </div>
          <div data-aos="fade-up" className="flex flex-col md:flex-row gap-8 items-center my-12">
            <div className="mx-auto">
              <img className="min-w-[400px]" src={blog3} alt="blog2" />
            </div>
            <div className="flex flex-col space-y-6">
              <h4
                className="text-[16px] font-sans font-semibold uppercase text-[#592EA9]"
                style={{ letterSpacing: "3px" }}
              >
                BUSINESS
              </h4>
              <h1 className="text-3xl font-bold ">
                How to build rapport with your web design clientsed
              </h1>

              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident.
              </p>
            </div>
          </div>
          <div data-aos="fade-up" className="flex flex-col md:flex-row gap-8 items-center my-12">
            <div className="mx-auto">
              <img className="min-w-[400px]" src={blog4} alt="blog2" />
            </div>
            <div className="flex flex-col space-y-6">
              <h4
                className="text-[16px] font-sans font-semibold uppercase text-[#592EA9]"
                style={{ letterSpacing: "3px" }}
              >
                Startup
              </h4>
              <h1 className="text-3xl font-bold ">
                Logo design trends to avoid in 2022
              </h1>

              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident.
              </p>
            </div>
          </div>
          <div data-aos="fade-up" className="flex flex-col md:flex-row gap-8 items-center my-12">
            <div className="mx-auto">
              <img className="min-w-[400px]" src={blog5} alt="blog2" />
            </div>
            <div className="flex flex-col space-y-6">
              <h4
                className="text-[16px] font-sans font-semibold uppercase text-[#592EA9]"
                style={{ letterSpacing: "3px" }}
              >
                TECHNOLOGY
              </h4>
              <h1 className="text-3xl font-bold ">
                8 Figma design systems you can download for free today
              </h1>

              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident.
              </p>
            </div>
          </div>
        </div>

        {/* Sky blue banner */}
        <div data-aos="fade-up" className="">
          <div className="hidden md:flex items-center justify-between w-full bg-[#237CFF] h-[120px] my-6 rounded-lg p-8 text-white">
            <div>
              <h1 className="text-2xl">Super discount on more than 100 USD</h1>
              <p className=" opacity-[0.7]">
                Have you ever finally just write dummy info
              </p>
            </div>
            {/* button */}
            <button className=" active:scale-[1.02] h-10 bg-[#FF9017] px-3 py-2 text-white rounded-lg">
              Shop now
            </button>
          </div>
        </div>

        {/* divider */}
        <div className="w-full h-2"></div>
      </div>
    </div>
  );
}
