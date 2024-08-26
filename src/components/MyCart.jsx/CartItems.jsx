import React, { useState } from "react";

import Cart from "./Cart";

export default function CartItems({ selectedProducts, handleRemoveFromCart }) {

  const handleRemoveProducts = (id) => {
    handleRemoveFromCart(id);
  };

  return (
    <section>
      {selectedProducts.map((element, index) => {
        return (
          <Cart
            key={index}
            element={element}
            handleRemoveProducts={handleRemoveProducts}
          />
        );
      })}
    </section>
  );
}
