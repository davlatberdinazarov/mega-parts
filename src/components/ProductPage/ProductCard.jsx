import { ShoppingCartContext } from "@/layout/MainLayout";
import { Button, IconButton } from "@material-tailwind/react";
import React, { useContext, useState } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ProductCard({ items }) {
  const [like, setLike ] = useState(false)
  const { handleAddToCart, toggleFavorite, favoriteLike } = useContext(ShoppingCartContext);

  const AddToCart = function (items) {
    handleAddToCart(items);
  };

  const AddToFavorite = function (items) {
    toggleFavorite(items);
    setLike(favoriteLike);
  };

  return (
    <div
      key={items.id}
      className=" border-2 select-none rounded-md bg-[#f6f7f9] flex flex-col h-full"
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
        <div className="sm:p-4 p-2">
          <div className="w-full py-2">
            <p>{items.title}</p>
            <span className=" text-[#8B96A5]">{items.cost}</span>
          </div>
          <div className="flex gap-2">
            <IconButton
              onClick={() => AddToFavorite(items)}
              className={`w-12 bg-plum ${like ? "text-red-600" : null}`}
              size="sm"
            >
              <FaHeart />
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
}
