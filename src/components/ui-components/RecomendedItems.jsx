import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function RecomendedItems({ recommenddedparts }) {

  function truncateText(text, maxLength) {
    if (text.length <= maxLength) {
      return text;
    } else {
      return text.substring(0, maxLength - 3) + '...';
    }
  }
  return (
    <div className="w-full h-full md:p-2">
      <h1>Recommended Items</h1>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 lg:grid-cols-5 gap-3 my-4 p-2 mx-auto w-full">
        {recommenddedparts.map((items, index )=> {
          return (
            <Link to={`product/${items.id}`} key={index} className="max-h-[310px] rounded-sm bg-white border-[1px] border-[#DEE2E7] p-4 flex flex-col">
              <div className="w-full h-32">
                <div className="w-32 h-32 mx-auto">
                  <img className=" w-full mx-auto h-full mb-3 hover:scale-[1.1] hover:transition hover:duration-200 hover:ease-linear" src={items.img} alt="part1" />
                </div>
              </div>
              <div className=" min-h-24 py-3">
                <p className=" font-semibold">{items.title}</p>
                <p className=" text-slate-400">{truncateText(items.desc, 40)}</p>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  );
}
