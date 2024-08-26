import { useContext, useState } from "react";
import { Button } from "../ui/button";
import { ShoppingCartContext } from "@/layout/MainLayout";
import { FaHeart, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Cart({ element, handleRemoveProducts }) {
  const { handleAddToCart, handleRemoveQuantityFromCart, handleAddToFavorite } = useContext(ShoppingCartContext);
  const totalCostProduct = element.cost * element.quantity

  const handleDecrement = (id) => {
    handleRemoveQuantityFromCart(id)
  };

  const handleIncrement = (item) => {
    handleAddToCart(item);
  };

  return (
    <div
      key={element.id}
      className="w-full my-2 hull flex flex-col md:flex-row justify-between border-b-[1px] pb-4 border-[#DEE2E7]"
    >
      <div className="flex gap-4 md:w-2/3 ">
       <div className=" overflow-hidden min-w-[63px] h-[63px] md:w-20 md:h-20 border-[1px] border-[#DEE2E7] rounded-md">
        <Link to={`/product/${element.id}`} className="w-full h-full bg-[#f7f7f7] rounded-md p-2 flex items-center justify-center border-[1px] border-[#DEE2E7] hover:scale-[1.1] hover:transition hover:duration-200 hover:ease-linear">
            <img className="w-full h-full" src={element.img} alt="img" />
          </Link>
       </div>

        <div>
          <h1 className="text-lg md:text-xl font-semibold">{element.title}</h1>
          <p className="text-[#8B96A5] text-md">{element.desc}</p>
          <div className="flex gap-2 my-3">
            <Button
              onClick={() => handleRemoveProducts(element.id)}
              variant="outline"
              className="p-3 text-red-500 h-6  hover:bg-red-500 hover:text-white"
            >
              <span className="hidden sm:block">remove</span> <FaTrash className="block sm:hidden"/>
            </Button>
            <Button
              onClick={() => handleAddToFavorite(element)}
              variant="outline"
              className="p-3 text-blue-500 h-6 hover:bg-blue-500 hover:text-white "
            >
              <span className="hidden sm:block">Add Favorite</span> <FaHeart className="block sm:hidden"/>
            </Button>
          </div>
        </div>
      </div>

      {/* 3 */}
      <div className="flex flex-row-reverse md:block items-center justify-between">
        <h2 className="font-semibold">{totalCostProduct} <span className=" ml-2 text-sm font-thin">UZS</span> </h2>
        <div className=" my-4">
          <div className="flex justify-around text-lg gap-2 w-24 border-[1px] border-[#BDC1C8] px-3 py-2 rounded-md">
            <button
              className={` h-4 w-4`}
              onClick={() => handleDecrement(element.id)}
            >
              -
            </button>
            <p>{element.quantity}</p>
            <button onClick={() => handleIncrement(element)}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
}
