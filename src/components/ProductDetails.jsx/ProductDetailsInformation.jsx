import React, { useState } from "react";
import { rpart1 } from "@/assets/images/z-index";
import { UnderlineTabs } from "./UnderlineTabs";
import data from "../../data/offers.json"
import { Link } from "react-router-dom";

export default function ProductDetailsInformation() {
  const [nearsetData, setNearestData] = useState(data);
  nearsetData.length = 7;
  return (
    <div className="grid lg:grid-cols-7 grid-cols-2 my-6 gap-4">
      <div className="lg:col-span-5 col-span-7 bg-white md:py-5 py-2 w-full h-full rounded-lg border-[1px] border-[#DEE2E7]">
        <div>
          <UnderlineTabs />
        </div>
      </div>

      <div className="lg:col-span-2 col-span-7 bg-white md:p-5 p-2 h-full rounded-lg border-[1px] border-[#DEE2E7]">
        <h3 className="font-semibold text-xl">You may like</h3>
        <div className="flex flex-col gap-2 my-3">
        { data.map((product, index) => {
          return (
          <div key={index} className="flex gap-3">
            <Link to={`/product/${product.id}`} className="max-w-20 w-full max-h-20 rounded-md p-2 flex items-center justify-center border-[1px] border-[#DEE2E7] overflow-hidden">
              <img className="w-full h-ful hover:scale-[1.1] hover:transition hover:duration-200 hover:ease-linearl" src={product.img} alt="" />
            </Link>
            <div>
              <h2>{product.desc}</h2>
              <p className="text-[#8B96A5]">price</p>
            </div>
          </div>
          )
        })}


        </div>
      </div>
    </div>
  );
}
