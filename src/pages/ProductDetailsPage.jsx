import ProductDetail from "@/components/ProductDetails.jsx/ProductDetail";
import ProductDetailsInformation from "@/components/ProductDetails.jsx/ProductDetailsInformation";
import RelatedProducts from "@/components/ProductDetails.jsx/RelatedProducts";
import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ProductDetailsPage() {
  return (
    <div className=" md:container lg:px-12 px-[15px]">
      <div className="w-full mb-6"></div>
      <header className="hidden text-[#8B96A5] md:flex flex-wrap gap-3 md:py-4 py-2">
        <Link to="/homepage" className="flex items-center gap-2">
          Home <FaAngleRight />
        </Link>
        <Link to="/homepage" className="flex items-center gap-2">
          Shock Absorbes <FaAngleRight />
        </Link>
        <Link to="/homepage" className="flex items-center gap-2">
          Gears <FaAngleRight />
        </Link>
        <Link to="/homepage" className="flex items-center gap-2">
          Auto gears <FaAngleRight />
        </Link>
      </header>{" "}
      {/* Main product details */}
      <div>
        <ProductDetail />
      </div>
      {/* /Main product details */}
      <div>
        <ProductDetailsInformation />
      </div>
      <div>
        <RelatedProducts />
      </div>
      {/* Sky blue banner */}
      <div className="">
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
      <div className="h-[60px]"></div>
    </div>
  );
}
