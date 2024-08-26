import { megapartsLogo } from "../assets/images/z-index";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
// import { button } from "./ui/button";
import { IoMdSearch } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import { useContext, useEffect, useState } from "react";

import { ShoppingCartContext } from "@/layout/MainLayout";
import { OffcanvasContext } from "@/layout/AppLayaut";
import { AllCategoryDropdown } from "./ui-components/AllCategroyDropdown";
import { RiBarChartHorizontalLine } from "react-icons/ri";

import { Listbox } from "@headlessui/react";
import { Button } from "@material-tailwind/react";

const featured = [
  { id: 1, name: "usd", unavailable: false },
  { id: 2, name: "uzs", unavailable: false },
  { id: 3, name: "euro", unavailable: false },
];

const mobileCategory = [
  { id: 1, name: "Mobiles", unavailable: false },
  { id: 2, name: "Laptops", unavailable: false },
  { id: 3, name: "Accessories", unavailable: false },
  { id: 4, name: "Others", unavailable: false },
  { id: 5, name: "Gadgets", unavailable: false },
  { id: 6, name: "Others", unavailable: false },
  { id: 7, name: "Others", unavailable: false },
  { id: 8, name: "Others", unavailable: false },
  { id: 9, name: "Others", unavailable: false },
  { id: 10, name: "Others", unavailable: false },
];

function calculatescreenColWidth(screenWidth) {
  let screenColWidth;
  if (screenWidth >= 768) {
    screenColWidth = true;
  } else {
    screenColWidth = false;
  }
  return screenColWidth;
}

export default function Header() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [selectedFeatured, setSelectedFeatured] = useState(featured[0]);
  const location = useLocation();

  const { cartData, filterByName, favoriteData, openModal, isOpen } =
    useContext(ShoppingCartContext);
  const { setOpen } = useContext(OffcanvasContext);

  // screen width for swipper
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
    location.pathname == "/profile/" || location.pathname == "/profile";

  let ordersPath =
    location.pathname == "/orders/" || location.pathname == "/orders";

  let mycartPath =
    location.pathname == "/mycart/" || location.pathname == "/mycart";

  let blogsPath =
    location.pathname == "/blogs/" || location.pathname == "/blogs";

  let isTrue = profilePath || ordersPath || mycartPath || blogsPath;

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/products/all");
  };

  const handleChangeProducts = (event) => {
    filterByName(event);
  };
  return (
    <>
      <div
        className={isTrue && !screenColWidth ? `hidden w-full` : `block w-full`}
      >
        <div className=" select-none fixed top-0 bg-white z-40 w-full shadow-sm">
          <div className="md:container lg:px-12 px-[15px] flex justify-between items-center py-3">
            <div className="flex items-center md:gap-6 gap-2">
              <div className="block lg:hidden">
                <div onClick={() => setOpen(true)}>
                  <FaBars className="text-xl" />
                </div>
              </div>
              <Link to="">
                <img
                  src={megapartsLogo}
                  className="mr-3 sm:w-[230px] w-44"
                  alt="Flowbite React Logo"
                />
              </Link>{" "}
            </div>
            {/* Input */}
            {!isTrue && (
              <div className="hidden lg:block">
                <form
                  onSubmit={handleSubmit}
                  className=" w-full max-h-[40px] border-2 pl-3 border-plum flex items-center justify-between rounded focus:p-0"
                >
                  <input
                    onChange={handleChangeProducts}
                    required
                    className="min-w-[260px] border-none focus:outline-none h-[20px] rounded-none"
                    type="text"
                    placeholder="Search"
                  />
                  {/* All category dropdown */}
                  <AllCategoryDropdown />

                  <Button
                    type="submit"
                    className=" bg-plum w-[100px] rounded-none p-1 text-md h-10 font-medium capitalize"
                  >
                    Search
                  </Button>
                </form>
              </div>
            )}
            {/* profile and other pages */}

            <div className="flex relative lg:top-2 items-center justify-around gap-4 md:gap-5 text-[#828994]">
              <Link
                to="/profile"
                className="flex flex-col justify-center text-xl items-center hover:text-plum transition ease-in duration-200"
              >
                <FaUser className="text-xl" />
                <p className="hidden xl:block text-[10px]">Profile</p>
              </Link>

              <Link
                to="/orders"
                className="flex flex-col justify-center text-xl items-center hover:text-plum transition ease-in duration-200"
              >
                <div className="relative">
                  <FaHeart className="text-xl" />
                  {favoriteData.length > 0 && (
                    <div className=" shadow-sm h-5 w-5 absolute -top-[1px] left-[13px] rounded-full bg-red-600 text-white text-[13px] flex items-center justify-center font-medium">
                      {favoriteData.length}
                    </div>
                  )}
                </div>
                <p className="hidden xl:block text-[10px]">Favorites</p>
              </Link>
              <Link
                to="/mycart"
                className="flex flex-col justify-center text-xl items-center hover:text-plum transition ease-in duration-200"
              >
                <div className="relative">
                  <FaShoppingCart className="text-xl" />
                  {cartData.length > 0 && (
                    <div className=" shadow-sm h-5 w-5 absolute -top-[1px] left-[13px] rounded-full bg-red-600 text-white text-[13px] flex items-center justify-center font-medium">
                      {cartData.length}
                    </div>
                  )}
                </div>
                <p className="hidden xl:block text-[10px]">My cart</p>
              </Link>
            </div>
          </div>

          {/* Input */}
          {!isTrue && (
            <div className="block lg:hidden md:container pb-1 lg:px-12 px-[15px]">
              <form onSubmit={handleSubmit} className="flex justify-between">
                <div className="flex w-full sm:w-[80vw] h-full sm:justify-between items-center gap-4 px-2 bg-white border-2 border-slate-400 focus:border-plum rounded-lg active:text-indigo-300">
                  <span className="text-2xl text-slate-400">
                    <IoMdSearch className="" />
                  </span>{" "}
                  <input
                    onChange={handleChangeProducts}
                    required
                    className="h-10 w-full border-none focus:outline-none"
                    type="text"
                    name="search"
                    placeholder="Search..."
                  />
                </div>
                <Button className="hidden sm:block text-lg bg-plum w-[100px] rounded-none p-1 text-md h-10 font-medium capitalize">Search</Button>
              </form>
            </div>
          )}

          {/* Secondary navbar using */}
          {!isTrue && (
            <div className="hidden md:block border-y-[1px]">
              <div className="md:container lg:px-12 px-[15px] w-full py-2 flex items-center justify-between flex-wrap gap-x-3 ">
                <div className="flex items-center gap-x-6 font-medium">
                  {/* Button to open the modal */}
                  <Button
                    variant="text"
                    onClick={openModal}
                    className="hover:bg-[#fafafb] font-medium p-1 px-1 rounded text-md flex items-center capitalize gap-3"
                  >
                    All Category{" "}
                    <RiBarChartHorizontalLine
                      className={`${isOpen ? "rotate-90" : ""}`}
                    />
                  </Button>

                  <Link to="shock-absorbes">Shock Absorbes</Link>
                  <Link to="brake-discs">Brake Discs</Link>
                  <Link to="spark-plugs">Spark Plugs</Link>
                  <Link to="blogs">Blogs</Link>
                </div>
                <div>
                <div className="flex items-center px-2 bg-white">
                    <h2 className="hidden md:block">English:</h2>
                    <div className="  z-30">
                      <Listbox
                        value={selectedFeatured}
                        onChange={setSelectedFeatured}
                      >
                        <Listbox.Button className="p-1 uppercase flex justify-around items-center gap-1">
                          {selectedFeatured.name}
                        </Listbox.Button>
                        <Listbox.Options className="absolute w-24 mt-2 text-[16px] rounded-md px-3 bg-white py-2 shadow-lg p-2">
                          {featured.map((featured) => (
                            <Listbox.Option
                              key={featured.id}
                              value={featured}
                              disabled={featured.unavailable}
                              className='hover:bg-gray-50'
                            >
                              {featured.name}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Listbox>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Pruducts */}
          {!isTrue && (
            <div className=" md:hidden flex items-center py-2">
              <Swiper
                slidesPerView={4}
                spaceBetween={10}
                freeMode={true}
                pagination={false}
                modules={[FreeMode, Pagination]}
                className="px-[15px]"
              >
                {mobileCategory.map((mobile) => {
                  return (
                    <SwiperSlide
                      key={mobile.id}
                      className="!min-w-[100px] bg-[#EFF2F4] flex items-center justify-center rounded-sm"
                    >
                      <Link
                        to={`/products/${mobile.name}`}
                        className=" px-3 w-[120px] py-1 text-plum rounded-lg mx-3 active:text-indigo-300"
                      >
                        {mobile.name}
                      </Link>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          )}
        </div>
        <div className="h-[40px] w-full"></div>
        {!isTrue && <div className=" h-[84px] lg:h-[58px] w-full"></div>}
      </div>
    </>
  );
}
