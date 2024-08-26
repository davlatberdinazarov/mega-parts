
import { useContext } from "react";
import { ShoppingCartContext } from "@/layout/MainLayout";

import { MdRemoveShoppingCart } from "react-icons/md";
import ProductCard from "@/components/ProductPage/ProductCard";

export default function ProducstPage() {

  const { products } = useContext(ShoppingCartContext);

  return (
    <div className=" md:container lg:px-12 px-[15px] py-6 sm:py-12">
      <div className="grid md:grid-cols-3 grid-cols-2 xl:grid-cols-5 gap-2 sm:gap-8 gap-y-5 my-4 py-2 w-full h-full">
        {products.map((items) => {
          return (
            <div key={items.id}>
              <ProductCard items={items} />
            </div>
          );
        })}
      </div>

      {products.length === 0 && (
        <div className="w-full h-full flex flex-col items-center justify-center">
          <h2 className="text-center text-plum text-3xl font-bold">
            Shopping Cart
          </h2>
          <div className="my-8">
            <MdRemoveShoppingCart className="text-9xl text-plum" />
          </div>
          <div>
            <p className="md:text-3xl text-lg text-center font-bold font-sans">
              Your Cart is currently empty{" "}
              <span className=" text-plum ">Nothing Found</span> !
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
