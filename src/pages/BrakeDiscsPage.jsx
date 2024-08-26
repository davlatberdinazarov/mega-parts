import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

export default function BrakeDiscsPage() {

  const path = useLocation()
  const pathText = path.pathname.substring(1);


  return (
    <div className=" md:container lg:px-12 px-[15px] pt-12 py-8">
      <header className="hidden text-[#8B96A5] md:flex flex-wrap gap-3 md:py-4 py-2 ">
        <Link to="/" className="flex items-center gap-2">
          Home <FaAngleRight />
        </Link>
        <Link to="/" className="flex items-center gap-2 capitalize">
          {pathText} <FaAngleRight />
        </Link>
      </header>
    </div>
  );
}
