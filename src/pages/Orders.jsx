import React, { useContext, useEffect, useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { oval } from "@/assets/images/z-index";

import { BsCreditCard2FrontFill } from "react-icons/bs";
import { ShoppingCartContext } from "@/layout/MainLayout";
import { Button, IconButton } from "@material-tailwind/react";
import { FaHeart, FaShoppingCart, FaTrash } from "react-icons/fa";

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

export default function Orders() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const { favoriteData, setFavoriteData, handleAddToCart } = useContext(ShoppingCartContext);

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


  const AddToCart = (items) => {
    handleAddToCart(items);
  };

  console.log(favoriteData)

  return (
    <div className={`lg:container lg:px-12 py-4 ${favoriteData.length == 0 ? "md:h-[400px]" : 'h-full'}  flex flex-col justify-center`}>
      {screenColWidth && (
        <header className="flex px-3 text-xl justify-between items-center pt-8 fixed top-0 w-full bg-gray-100 z-40">
          <Link to="/">
            <FaAngleLeft />
          </Link>
          <h3 className="font-bold relative right-6">Orders</h3>
          <div>{""}</div>
        </header>
      )}
      <div className={ favoriteData.length == 0 ? "mb-20 h-12" : "mb-10"}></div>
      {favoriteData.length == 0 && (
        <div>

          <div className="px-2 my-4 sm:container flex flex-col gap-5 items-center relative -top-12 justify-center ">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 w-full lg:w-1/2">
              {/* image */}
              <div className="w-32 h-32 relative right-12 flex justify-center items-center select-none mt-16">
                <img src={oval} alt="oval" />
                <BsCreditCard2FrontFill className="text-[#0A74FF] text-[104px] absolute left-12" />
              </div>
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">
                  Don’t have any order :)
                </h2>
                <p className="text-[#868686]">
                  It’s seems like you have not login in to your account. You may
                  easily create account
                </p>
              </div>
            </div>
            <Button
              variant="outlined"
              className="text-[#0A74FF] bg-white border-[2px] w-[225px] border-[#0A74FF]"
            >
              Create account
            </Button>
          </div>
        </div>
      )}

      {favoriteData.length > 0 && (
        <div data-aos="fade-up" className=" -z-0 px-2">
          <h1 className="text-xl font-bold text-center">Favorite products </h1>
          <div className="grid md:grid-cols-3 grid-cols-2 xl:grid-cols-5 gap-2 sm:gap-8 gap-y-5 my-4 py-2 w-full h-full">
            {favoriteData.map((items,index) => {
              return (
                <div
                  key={items.id}
                  className="border-2 select-none rounded-md bg-[#f6f7f9] flex flex-col h-full"
                >
                  <div>
                    <Link
                      to={`/product/${items.id}`}
                      className="bg-[#eee] border-2 rounded-lg w-full h-[200px] flex items-center  justify-center"
                    >
                      <img
                        className=" max-w-[159px] h-[150px] w-fit hover:scale-[1.1] hover:transition hover:duration-200 hover:ease-linear"
                        src={items.img}
                        alt="part1"
                      />
                    </Link>
                    <div className="p-2">
                      <div className="w-full py-2">
                        <p>{items.title}</p>
                        <span className=" text-[#8B96A5]">{items.cost}</span>
                      </div>
                      <div className="flex gap-2">
                        <IconButton onClick={() => removeFromFavorite(items.id)} className="w-12 bg-plum" size="sm">
                          <FaTrash/>
                        </IconButton>
                        <Button
                          size="sm"
                          onClick={() => {
                            AddToCart(items);
                          }}
                          variant="outlined"
                          className="text-plum w-full border-plum flex items-center justify-between gap-2"
                        >
                          to cart <FaShoppingCart />{" "}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

          </div>
            <div className="flex justify-center">
              <Button onClick={() => setFavoriteData([])} color="red">Remove All</Button>
            </div>
        </div>
      )}
    </div>
  );
}
