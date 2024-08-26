import React, { useContext, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { FaAngleLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

import { FaArrowLeftLong } from "react-icons/fa6";

import { oval } from "@/assets/images/z-index";
import { BsFillCartFill } from "react-icons/bs";
import RelatedProducts from "@/components/ProductDetails.jsx/RelatedProducts";
import CartItems from "@/components/MyCart.jsx/CartItems";
import { ShoppingCartContext } from "@/layout/MainLayout";

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


export default function MyCart() {

  const { cartData, handleRemoveFromCart, setCartData, removeAllItems, totalPrice, handleAddToFavorite } = useContext(ShoppingCartContext)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const selectedProducts = cartData;
  // console.log("my-cart",selectedProducts);

  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  },[])

  
  useEffect(() => {
    // Load cart data from local storage on component mount
    const savedCartData = localStorage.getItem("cartData");
    if (savedCartData) {
      setCartData(JSON.parse(savedCartData));
    }
  }, []);

  useEffect(() => {
    // Save cart data to local storage whenever it changes
    localStorage.setItem("cartData", JSON.stringify(cartData));
  }, [cartData]);

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

  // costs
  const shippingCost = 150000;
  const taxCost = 120000;
  let total = shippingCost + taxCost + totalPrice

  return (
    <div
      className={`lg:container lg:px-12 h-full ${
        !selectedProducts
          ? ` flex flex-col justify-center h-[100vh] md:h-[400px]`
          : ""
      }`}
    >
      <div className="w-full h-1"></div>
      {screenColWidth && (
        <header className="flex px-3 text-xl justify-between items-center pt-8 fixed top-0 w-full bg-gray-100 z-40 pb-2">
          <Link to="/">
            <FaAngleLeft />
          </Link>
          <h3 className="font-bold relative right-6">Carts</h3>
          <div>{""}</div>
        </header>
      )}
      {!selectedProducts.length && (
        <div>
          <div className="w-full h-1 mb-28"></div>
          <div className="px-2 my-4 sm:container flex flex-col gap-5 items-center relative -top-12 justify-center ">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 w-full lg:w-1/2">
              {/* image */}
              <div className="w-32 h-32 relative right-12 flex justify-center items-center select-none mt-16">
                <img src={oval} alt="oval" />
                <BsFillCartFill className="text-[#0A74FF] text-[104px] absolute left-12" />
              </div>
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Your cart empty :)</h2>
                <p className="text-[#868686]">
                  It’s seems like you have not login in to your account. You may
                  easily create account
                </p>
              </div>
            </div>
            <Button
              variant="outline"
              className="text-[#0A74FF] border-[2px] w-[225px] border-[#0A74FF]"
            >
              Create account
            </Button>
          </div>
        </div>
      )}

      {selectedProducts.length > 0 && (
        <div data-aos="fade-up" className=" w-full py-6 px-2">
          {/* divider */}
          <div className="pt-[52px]"></div>

          <h1 className="my-2 text-xl md:text-2xl font-semibold">
            My cart ({selectedProducts.length})
          </h1>
          <div data-aos="fade-up" className=" w-full grid lg:grid-cols-5 gap-5 mb-6">
            {/* 1. */}
            <div className=" col-span-4 p-3 bg-white rounded-md border-[1px] border-[#DEE2E7]">
              <div>
                <CartItems
                  handleRemoveFromCart={handleRemoveFromCart}
                  selectedProducts={selectedProducts}
                />
              </div>
              <div className="w-full flex flex-col gap-2 pb-3 border-b-[1px] border-[#DEE2E7]">
                <div className="flex text-xl justify-between">
                  <span className="text-[#8B96A5]">
                    Items ({selectedProducts.length}):
                  </span>
                  <span>{totalPrice}</span>
                </div>
                <div className="flex text-xl justify-between">
                  <span className="text-[#8B96A5]">Shipping:</span>
                  <span>{shippingCost}</span>
                </div>
                <div className="flex text-xl justify-between">
                  <span className="text-[#8B96A5]">Tax:</span>
                  <span>{taxCost}</span>
                </div>
                <div className="flex text-xl justify-between ">
                  <span className="text-xl font-semibold">Total:</span>
                  <span className="font-semibold">{total}<span className=" ml-2 text-sm font-thin">UZS</span></span>
                </div>
                <button className="w-full p-2 rounded text-white bg-green-500">
                  Checkout ({selectedProducts.length}) items
                </button>
              </div>

              <div className="flex justify-between mt-3">
                <Link to="/homepage">
                  <Button onClick={() => history.back()} className="flex gap-2">
                    <FaArrowLeftLong /> Back to shop
                  </Button>
                </Link>
                <Button onClick={removeAllItems} variant="outline" className="text-plum font-medium !border-[2px] border-plum">
                  Remove all
                </Button>
              </div>
            </div>

            <div className="bg-white w-[250px] md:col-span-1 p-3 h-28 rounded-md border-[1px] border-[#DEE2E7]">
              <h1>Have a cupon?</h1>
              <div className="w-full flex mt-2 justify-between border-[1px] border-[#DEE2E7] px-2  rounded-md">
                <input
                  className="w-1/2 border-1 border-blue-500 focus-visible:outline-none"
                  placeholder="type here.."
                  type="text"
                />{" "}
                <button className="text-indigo-400 py-3 px-4 active:text-indigo-300 border-l-[2px]">
                  Apply
                </button>
              </div>
            </div>
          </div>

          {/* Custom services */}

          <div data-aos="fade-up" className="flex flex-col md:flex-row md:gap-16">
            <div className="flex gap-2 my-3 md:my-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <circle cx="24" cy="24" r="24" fill="#DEE2E7" />
                <path
          
                  d="M30 20H29V18C29 15.24 26.76 13 24 13C21.24 13 19 15.24 19 18V20H18C16.9 20 16 20.9 16 22V32C16 33.1 16.9 34 18 34H30C31.1 34 32 33.1 32 32V22C32 20.9 31.1 20 30 20ZM24 29C22.9 29 22 28.1 22 27C22 25.9 22.9 25 24 25C25.1 25 26 25.9 26 27C26 28.1 25.1 29 24 29ZM21 20V18C21 16.34 22.34 15 24 15C25.66 15 27 16.34 27 18V20H21Z"
                  fill="#8B96A5"
                />
              </svg>
              <div>
                <h2>Secure payment</h2>
                <p className="text-[#A9ACB0]">Have you ever finally just </p>
              </div>
            </div>
            <div className="flex gap-2 my-3 md:my-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <circle cx="24" cy="24" r="24" fill="#DEE2E7" />
                <path
                  d="M32 15H16C14.9 15 14.01 15.9 14.01 17L14 35L18 31H32C33.1 31 34 30.1 34 29V17C34 15.9 33.1 15 32 15ZM19 22H29C29.55 22 30 22.45 30 23C30 23.55 29.55 24 29 24H19C18.45 24 18 23.55 18 23C18 22.45 18.45 22 19 22ZM25 27H19C18.45 27 18 26.55 18 26C18 25.45 18.45 25 19 25H25C25.55 25 26 25.45 26 26C26 26.55 25.55 27 25 27ZM29 21H19C18.45 21 18 20.55 18 20C18 19.45 18.45 19 19 19H29C29.55 19 30 19.45 30 20C30 20.55 29.55 21 29 21Z"
                  fill="#8B96A5"
                />
              </svg>
              <div>
                <h2>Customer support</h2>
                <p className="text-[#A9ACB0]">Have you ever finally just </p>
              </div>
            </div>
            <div className="flex gap-2 my-3 md:my-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <circle cx="24" cy="24" r="24" fill="#DEE2E7" />
                <path
                  d="M31.5 20H29V18C29 16.9 28.1 16 27 16H15C13.9 16 13 16.9 13 18V27C13 28.1 13.9 29 15 29C15 30.66 16.34 32 18 32C19.66 32 21 30.66 21 29H27C27 30.66 28.34 32 30 32C31.66 32 33 30.66 33 29H34C34.55 29 35 28.55 35 28V24.67C35 24.24 34.86 23.82 34.6 23.47L32.3 20.4C32.11 20.15 31.81 20 31.5 20ZM18 30C17.45 30 17 29.55 17 29C17 28.45 17.45 28 18 28C18.55 28 19 28.45 19 29C19 29.55 18.55 30 18 30ZM31.5 21.5L33.46 24H29V21.5H31.5ZM30 30C29.45 30 29 29.55 29 29C29 28.45 29.45 28 30 28C30.55 28 31 28.45 31 29C31 29.55 30.55 30 30 30Z"
                  fill="#8B96A5"
                />
              </svg>
              <div>
                <h2>Free delivery</h2>
                <p className="text-[#A9ACB0]">Have you ever finally just </p>
              </div>
            </div>
          </div>

          <div data-aos="fade-up">
            <RelatedProducts />
          </div>

          <div data-aos="fade-up" className="mb-5">
            <div className="hidden md:flex items-center justify-between w-full bg-[#237CFF] h-[120px] my-6 rounded-lg p-8 text-white">
              <div>
                <h1 className="text-2xl">
                  Super discount on more than 100 USD
                </h1>
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

          <div className="w-full h-6"></div>
        </div>
      )}
    </div>
  );
}
