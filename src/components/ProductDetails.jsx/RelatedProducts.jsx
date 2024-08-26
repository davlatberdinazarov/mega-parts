import React, { useContext, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { ShoppingCartContext } from "@/layout/MainLayout";
import data from '../../data/offers.json'

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

export default function RelatedProducts() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const { handleAddToCart } = useContext(ShoppingCartContext);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const columnCount = calculateColumnCount(screenWidth);

  return (
    <div className="rounded-lg border-[1px] border-[#DEE2E7] md:p-5 p-2 bg-white w-full h-full select-none">
      <h3 className="text-xl mb-2 font-semibold">Related products</h3>

      <div className="">
        {/* Pruducts */}
        <Swiper
          className="mySwiper w-full flex"
          slidesPerView={columnCount}
          freeMode={true}
          pagination={false}
          modules={[FreeMode, Pagination]}
        >
          {data.map((items) => {
            return (
              <SwiperSlide
                key={items.id}
                className="max-w-[172px] mr-5  h-full flex flex-col gap-4 items-center"
              >
                <div>
                  <Link to={`/product/${items.id}`} className="w-[172px] h-[172px] p-6 bg-[#eee] rounded-lg block overflow-hidden">
                    <img
                      className=" w-full h-full hover:scale-[1.1] hover:transition hover:duration-200 hover:ease-linear"
                      src={items.img}
                      alt="part1"
                    />
                  </Link>
                  <div className="w-full py-2">
                    <p>{items.title}</p>
                    <span className=" text-[#8B96A5]">price</span>
                  </div>
                  <Button
                    onClick={() => {handleAddToCart(items)}}
                    variant="outlined"
                    className="text-plum border-plum flex items-center justify-between gap-2"
                  >
                    Move to cart <FaShoppingCart />{" "}
                  </Button>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
