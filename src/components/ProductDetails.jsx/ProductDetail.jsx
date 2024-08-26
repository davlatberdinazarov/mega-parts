import React, { useContext, useEffect, useState } from "react";
import { FaEye, FaHeart } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { TbBasketPlus } from "react-icons/tb";
import { MdOutlineShoppingBasket } from "react-icons/md";
import { Button } from "../ui/button";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { Link, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import offersData from "../../data/offers.json";

import ProductImageSlides from "./ProductImageSlides";
import { ShoppingCartContext } from "@/layout/MainLayout";

export default function ProductDetail() {
  const [selectedProduct, setSelectedProduct] = useState([]);
  const notify = () => toast("Added 1 item to your cart");

  const { handleAddToCart, handleAddToFavorite } =
    useContext(ShoppingCartContext);

  // product handling from offer and deal with his id
  const id = useParams().id;
  useEffect(() => {
    const selectedItem = offersData.filter(
      (selectedItem) => selectedItem.id == id
    );
    setSelectedProduct(selectedItem);
  }, [id]);

  // console.log("selectedProducts", selectedProduct);

  const addCart = (item) => {
    handleAddToCart(item);
    notify();
    console.log("addCart console", item);
  };

  const addFovorite = (item) => {
    handleAddToFavorite(item);
  };

  return (
    <section className=" md:bg-white md:p-5 py-2 w-full h-full rounded-lg md:border-[1px] md:border-[#DEE2E7] grid grid-cols-12 gap-6 ">
      {/* poduct details */}
      <div className="col-span-12 lg:col-span-4 xl:col-span-4">
        {selectedProduct &&
          selectedProduct.map((element) => {
            return (
              <ProductImageSlides
                key={element.id}
                imgs={element.productImages}
              />
            );
          })}
      </div>
      {/* product information */}
      <figure className="col-span-12 p-4 lg:col-span-7 xl:col-span-5 flex flex-col lg:flex-row gap-5 ">
        {/* product content */}

        {selectedProduct &&
          selectedProduct.map((item, index) => {
            return (
              <div className="w-full" key={index}>
                <article>
                  <span className="hidden md:flex items-center gap-2 text-[#00B517]">
                    <FaCheck /> In stock
                  </span>
                  <h2 className="text-xl md:text-2xl font-semibold">
                    {item.title}
                  </h2>
                  <h2 className="text-xl md:text-2xl">
                    Cost:{" "}
                    <span className=" font-semibold text-green-600 underline">
                      {/* {item.cost} */}
                      <Link to='/login'>price</Link>
                    </span>
                    <span className=" ml-2 text-sm">UZS</span>
                  </h2>
                </article>

                <div className="text-[#787A80] flex items-center gap-4 my-2">
                  <span className="flex items-center gap-2">
                    <FaEye /> 32 reviews
                  </span>{" "}
                  •
                  <span className="flex items-center gap-2">
                    <MdOutlineShoppingBasket /> 154 sold
                  </span>
                </div>

                {/* const changes per time */}
                <div className="bg-[#FFF0DF] w-full p-3 hidden md:flex justify-start gap-16">
                  <div className="px-2">
                    <h3 className="text underline font-semibold text-[#FA3434]">
                      <Link to='/login'>price</Link>
                    </h3>
                    <p className="text-[#606060] text-sm">50-100 pcs</p>
                  </div>
                  <div className="px-2 border-l-[1px] border-[#BDC1C8]">
                    <h3 className="text underline font-semibold "><Link to='/login'>price</Link></h3>
                    <p className="text-[#606060] text-sm">50-100 pcs</p>
                  </div>
                  <div className="px-2 border-l-[1px] border-[#BDC1C8]">
                    <h3 className="text underline font-semibold">
                      <Link to='/login'>price</Link>
                    </h3>
                    <p className="text-[#606060] text-sm">50-100 pcs</p>
                  </div>
                </div>

                {/* mobile views */}
                <div className="md:hidden flex gap-3 items-baseline">
                  <h3 className="text underline font-semibold text-[#FA3434]">
                  <Link to='/login'>price</Link>
                  </h3>
                  <p className="text-[#606060] text-md">(50-100 pcs)</p>
                </div>

                {/* Mobile*/}
                <div className="md:hidden border-b-[1px] border-[#BDC1C8]">
                  <div className="flex py-1 ">
                    <div className="w-1/3 text-[#8B96A5]">Canditional:</div>
                    <div className="w-2/3 text-[#505050]">Classic shoes</div>
                  </div>
                  <div className="flex py-1 ">
                    <div className="w-1/3 text-[#8B96A5]">Material:</div>
                    <div className="w-2/3 text-[#505050]">Plastic Material</div>
                  </div>
                  <div className="flex py-1 ">
                    <div className="w-1/3 text-[#8B96A5]">Category:</div>
                    <div className="w-2/3 text-[#505050]">Modern nice</div>
                  </div>
                  <div className="flex py-1 ">
                    <div className="w-1/3 text-[#8B96A5]">Item num:</div>
                    <div className="w-2/3 text-[#505050]">Modern nice</div>
                  </div>

                  <p className="mt-2">
                    Info about edu item is an ideal companion for anyone engaged
                    in learning. The drone provides precise and ...
                  </p>
                  <Link to="#" className="text-plum  font-semibold">
                    Read more
                  </Link>
                </div>

                {/* /const changes per time */}
                {/*   */}
                {/* Product props */}

                <div className="hidden md:block my-3">
                  <div className="flex py-3 border-b-[1px] border-[#BDC1C8]">
                    <div className="w-1/3 text-[#8B96A5]">Price:</div>
                    <div className="w-2/3 text-[#505050]   ">Negotiable</div>
                  </div>

                  <div className="border-b-[1px] border-[#BDC1C8]">
                    <div className="flex py-2 ">
                      <div className="w-1/3 text-[#8B96A5]">Type:</div>
                      <div className="w-2/3 text-[#505050]">Classic shoes</div>
                    </div>
                    <div className="flex py-2 ">
                      <div className="w-1/3 text-[#8B96A5]">Material:</div>
                      <div className="w-2/3 text-[#505050]">
                        Plastic Material
                      </div>
                    </div>
                    <div className="flex py-2 ">
                      <div className="w-1/3 text-[#8B96A5]">Design:</div>
                      <div className="w-2/3 text-[#505050]">Modern nice</div>
                    </div>
                  </div>

                  {/* 3 */}
                  <div className="border-b-[1px] border-[#BDC1C8]"></div>
                </div>

                {/* Shopping section */}
                <div className="md:block">
                  <div className="flex items-center gap-3 mb-3">
                    <Button
                      variant="outline"
                      className="active:scale-[1.02] w-1/2 py-4 sm:py-5 text-lg !border-[2px] sm:!border-[3px] !border-plum text-plum font-medium sm:font-semibold"
                    >
                      Shop now
                    </Button>

                    <Button
                      onClick={() => addCart(item)}
                      className=" active:scale-[1.02] h-10 sm:h-12 bg-plum w-1/2 flex justify-center gap-4 items-center"
                    >
                      <h3 className=" uppercase font-semibold sm:text-md">
                        Add to cart
                      </h3>
                      <TbBasketPlus className="text-2xl sm:text-2xl font-bold" />
                    </Button>
                    <ToastContainer
                      position="top-right"
                      autoClose={2000}
                      limit={1}
                      hideProgressBar={false}
                      newestOnTop={false}
                      closeOnClick
                      rtl={false}
                      pauseOnFocusLoss
                      draggable
                      pauseOnHover
                      theme="dark"
                      transition:Bounce
                    />
                  </div>
                </div>
              </div>
            );
          })}
        {/* /proudct information  */}
      </figure>
      {/* proudct information  */}
      <div className="col-span-12 xl:col-span-3 flex flex-col justify-around">
        {selectedProduct &&
          selectedProduct.map((item, index) => {
            return (
              <div key={index} className="w-full h-full p-4 bg-white border-[1px] border-[#DEE2E7] rounded-lg">
                <header className="flex gap-4 pb-6  border-b-[1px] border-[#DEE2E7]">
                  <div className="w-12 h-12 flex items-center justify-center rounded-md bg-[#C6F3F1] text-[rgba(76, 167, 167, 0.60)] text-2xl font-semibold">
                    R
                  </div>
                  <div>
                    <h2>Supplier</h2>
                    <h2>Guanjoi Trading LLC</h2>
                  </div>
                </header>

                <div className="md:border-b-[1px] border-[#BDC1C8] pb-4 md:block flex gap-3">
                  <div className="flex gap-2 py-2 items-center">
                    <div className=" text-[#8B96A5]">
                      <MdOutlineVerifiedUser className="text-xl" />
                    </div>
                    <div className=" text-[#505050]">Verified</div>
                  </div>
                  <div className="flex gap-2 py-2 items-center">
                    <div className=" text-[#8B96A5]">
                      <TbWorld className="text-xl" />
                    </div>
                    <div className=" text-[#505050]">shipping</div>
                  </div>
                </div>

                <div className="xl:flex-col my-8 flex-row-reverse sm:justify-between items-center gap-3 mb-3 flex">
                  <Button
                    variant="outline"
                    className="active:scale-[1.02] xl:w-full w-1/2 py-5 text-md sm:text-lg !border-[2px] sm:!border-[3px] !border-green-600 text-green-600 hover:text-green-600 font-medium sm:font-semibold"
                  >
                    Send inquery
                  </Button>

                  <Button
                    onClick={() => addFovorite(item)}
                    className=" active:scale-[1.02] sm:h-12 h-10 hover:bg-green-500 bg-green-600 xl:w-full w-1/2 flex justify-center gap-2 sm:gap-4 items-center"
                  >
                    <h3 className=" uppercase font-medium sm:font-semibold text-md">
                      Add to favorite
                    </h3>
                    <FaHeart className="text-lg sm:text-xl font-medium sm:font-semibold" />
                  </Button>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
}
