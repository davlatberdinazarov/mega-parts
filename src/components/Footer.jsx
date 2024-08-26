import { megapartsLogo, appstore, googleplay } from "../assets/images/z-index";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { FaYoutube } from "react-icons/fa6";

import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";

function calculatescreenColWidth(screenWidth) {
  let screenColWidth;
  if (screenWidth >= 768) {
    screenColWidth = true;
  } else {
    screenColWidth = false;
  }
  return screenColWidth;
}

export default function Footer() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const location = useLocation();

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

  let profilePath =
    location.pathname == "/homepage/profile/" ||
    location.pathname == "/homepage/profile";

  let ordersPath =
    location.pathname == "/homepage/orders/" ||
    location.pathname == "/homepage/orders";

  let mycartPath =
    location.pathname == "/homepage/mycart/" ||
    location.pathname == "/homepage/mycart";

  let isTrue = profilePath || ordersPath || mycartPath;

  return (
    <>
      {
        <div className={isTrue && !screenColWidth ? `hidden` : `block`}>
          <div className="min-h-[324px] w-full bg-white z-50">
            <div className=" md:container lg:px-12 px-[15px] py-[41px] flex flex-col gap-12 flex-wrap md:flex-row ">
              {/* main logo */}
              <div className="w-[276px] select-none">
                <Link to="/">
                  <img src={megapartsLogo} alt="megaparts logo" />
                </Link>
                <p className="mt-[44px] mb-6 text-[#505050]">
                  Best information about the company gies here but now lorem
                  ipsum is
                </p>
                {/* social logos  */}
                <div className="flex gap-2">
                  <Link to="#"
                    className="h-8 w-8 hover:bg-plum bg-[#BDC4CD] rounded-full flex items-center justify-center"
                  >
                    <FaFacebook className="text-white text-xl" />
                  </Link>
                  <Link to="#"
                    className="h-8 w-8 hover:bg-plum bg-[#BDC4CD] rounded-full flex items-center justify-center"
                  >
                    <FaTwitter className="text-white text-xl" />
                  </Link>
                  <Link to="#"
                    className="h-8 w-8 hover:bg-plum bg-[#BDC4CD] rounded-full flex items-center justify-center"
                  >
                    <FaLinkedin className="text-white text-xl" />
                  </Link>
                  <Link to="#"
                    className="h-8 w-8 hover:bg-plum bg-[#BDC4CD] rounded-full flex items-center justify-center"
                  >
                    <LuInstagram className="text-white text-xl" />
                  </Link>
                  <Link to="#"
                    className="h-8 w-8 hover:bg-plum bg-[#BDC4CD] rounded-full flex items-center justify-center"
                  >
                    <FaYoutube className="text-white text-xl" />
                  </Link>
                </div>
              </div>
              {/* 2 */}
              <div className="flex flex-wrap  gap-8 sm:gap-16 sm:justify-between ">
                {/* About */}
                <div className="">
                  <h3 className=" font-medium mb-3">About</h3>
                  <div className="text-[#8B96A5] flex flex-col gap-1">
                    <Link className="hover:text-gray-700" to="#">About Us</Link>
                    <Link className="hover:text-gray-700" to="#">Find store</Link>
                    <Link className="hover:text-gray-700" to="#">Categories</Link>
                    <Link className="hover:text-gray-700" to="/blogs">Blogs</Link>
                  </div>
                </div>

                {/* Partnerships */}
                <div className="">
                  <h3 className=" font-medium mb-3">Partnerships</h3>
                  <div className="text-[#8B96A5] flex flex-col gap-1">
                    <Link className="hover:text-gray-700" to="#">About Us</Link>
                    <Link className="hover:text-gray-700" to="#">Find store</Link>
                    <Link className="hover:text-gray-700" to="#">Categories</Link>
                    <Link className="hover:text-gray-700" to="#">Blogs</Link>
                  </div>
                </div>

                {/* Information */}
                <div className="">
                  <h3 className=" font-medium mb-3">Information</h3>
                  <div className="text-[#8B96A5] flex flex-col gap-1">
                    <Link className="hover:text-gray-700" to="#">Help Center</Link>
                    <Link className="hover:text-gray-700" to="#">Money Refund</Link>
                    <Link className="hover:text-gray-700" to="#">Shipping</Link>
                    <Link className="hover:text-gray-700" to="#">Contact Us</Link>
                  </div>
                </div>

                {/* For users */}
                <div className="">
                  <h3 className=" font-medium mb-3">For users</h3>
                  <div className="text-[#8B96A5] flex flex-col gap-1">
                    <Link className="hover:text-gray-700" to="#">Login</Link>
                    <Link className="hover:text-gray-700" to="#">Settings</Link>
                    <Link className="hover:text-gray-700" to="#">Register</Link>
                    <Link className="hover:text-gray-700" to="#">My orders</Link>
                  </div>
                </div>

                {/* Get app */}
                <div>
                  <h3 className=" font-medium mb-3">Get app</h3>
                  <div className="text-[#8B96A5] flex flex-col gap-1">
                    <Link to="https://www.apple.com/app-store/">
                      <img
                        className="rounded-md hover:scale-[1.01] transition-all"
                        src={appstore}
                        alt="appstore logo"
                      />
                    </Link>
                    <Link to="https://play.google.com/store/games?hl=ru&gl=US">
                      <img
                        className="rounded-md hover:scale-[1.01] transition-all"
                        src={googleplay}
                        alt="googleplay logo"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[68px] bg-[#EFF2F4]">
            {/* Second footer */}
            <div className="md:container lg:px-12 px-[15px] h-full flex items-center justify-between">
              <p>© IT LIVE 2024 All rights reserved. </p>
              <Menu>
                <MenuHandler>
                  <Button color="white" className="p-2 bg-none">Languages</Button>
                </MenuHandler>
                <MenuList className="w-4">
                  <MenuItem>Uzbek</MenuItem>
                  <MenuItem>Russian</MenuItem>
                  <MenuItem>English</MenuItem>
                </MenuList>
              </Menu>
            </div>
          </div>
        </div>
      }
    </>
  );
}
