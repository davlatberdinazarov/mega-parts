import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { FaAngleLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { oval } from "@/assets/images/z-index";
import { FaUser } from "react-icons/fa";

function calculatescreenColWidth(screenWidth) {
  let screenColWidth;
  if (screenWidth >= 768) {
    screenColWidth = false;
  } else {
    screenColWidth = true;
  }
  return screenColWidth;
}

export default function Profile() {
  let location = useLocation();
  // console.log(location.pathname);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

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
    <div className="lg:container lg:px-12 h-[100vh] md:h-[400px] flex flex-col justify-center ">
      {screenColWidth && (
        <header className="flex px-3 text-xl justify-between items-center pt-8 fixed top-0 w-full bg-gray-100 z-40">
          <Link to="/">
            <FaAngleLeft />
          </Link>
          <h3 className="font-bold relative right-6">Profile</h3>
          <div>{""}</div>
        </header>
      )}
      <div>
        <div className="mb-16 h-12"></div>
        <div className="px-2 my-4 sm:container flex flex-col gap-5 items-center relative -top-12 justify-center ">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 w-full lg:w-1/2">
            {/* image */}
            <div className="w-32 h-32 relative right-12 flex justify-center items-center select-none sm:mt-12">
              <img src={oval} alt="oval" />
              <FaUser className="text-plum text-[104px] absolute left-12" />
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">
                You don’t have account :)
              </h2>
              <p className="text-[#868686]">
                It’s seems like you have not login in to your account. You may
                easily create account
              </p>
            </div>
          </div>
          <Link to='/register'>
            <Button
              variant="outline"
              className="text-plum border-[2px] w-[225px] border-plum"
            >
              Create account
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
