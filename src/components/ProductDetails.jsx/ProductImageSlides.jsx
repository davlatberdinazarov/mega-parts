import React, { useState } from "react";
import { rpart1, rpart2, rpart3, rpart4 } from "@/assets/images/z-index";
import { IoMdArrowDropleftCircle } from "react-icons/io";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { Button } from "@material-tailwind/react";
export default function ProductImageSlides({ imgs }) {

  const [wordData, setWordData] = useState(imgs[0]);
  const [val, setVal] = useState(0);
  const handleClick = (index) => {
    setVal(index);
    const wordSlider = imgs[index];
    setWordData(wordSlider);
  };
  const handleNext = () => {
    let index = val < imgs.length - 1 ? val + 1 : val;
    setVal(index);
    const wordSlider = imgs[index];
    setWordData(wordSlider);
  };
  const handlePrevious = () => {
    let index = val <= imgs.length - 1 && val > 0 ? val - 1 : val;
    setVal(index);
    const wordSlider = imgs[index];
    setWordData(wordSlider);
  };

  return (
    <figure className="w-full px-12 lg:px-0 flex items-center justify-center">
      <div className="">
        <div className="flex relative">
          <button className="absolute top-[45%] opacity-50 md:hidden" onClick={handlePrevious}>
            <IoMdArrowDropleftCircle className="text-4xl text-plum" />
          </button>
          <div className=" transition-shadow mx-auto w-full h-[300px] select-none rounded-lg sm:border-[1px] border-[#DEE2E7] p-2 flex items-center justify-center">
            <img className=" w-fit min-w-[300px] h-fit object-cover" src={wordData.img} alt="parts" />
          </div>
          <button className="absolute top-[45%] right-0 opacity-50 md:hidden" onClick={handleNext}>
            <IoMdArrowDroprightCircle className="text-4xl text-plum" />
          </button>
        </div>
        <div className="my-3 grid grid-cols-6 gap-2 sm:gap-4">
          {imgs.map((data, i) => (
            <div variant="text"
              className={`cursor-pointer max-w-[100px] col-span-1 rounded-lg p-2 border-[1px] ${
                wordData.id - 1 == i ? `border-plum border-[2px]` : `border-[#DEE2E7]`
              } flex items-center justify-center select-none`}
              key={i}
            >
              <img
                className={`h-fit w-fit`}
                src={data.img}
                onClick={() => handleClick(i)}
              />
            </div>
          ))}
        </div>
      </div>
    </figure>
  );
}
