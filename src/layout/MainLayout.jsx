import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React, { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import data from "../data/offers.json"
import { DrawerOffcanvas } from "@/components/ui-components/Offcanvas";
import CatalogCategory from "@/components/ui-components/CatalogCategory";

export const ShoppingCartContext = createContext();

const MainLayout = () => {
  // MODAL

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(prev => !prev);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  // MODAL /


  const [ favoriteLike, setFavoriteLike ] = useState(
    JSON.parse(localStorage.getItem("favoriteLike")) || []
  );
  const [ products, setProducts ] = useState(data)

  const [favoriteData, setFavoriteData] = useState(
    JSON.parse(localStorage.getItem("favoriteData")) || []
  );
  const [cartData, setCartData] = useState(
    JSON.parse(localStorage.getItem("cartData")) || []
  );

  useEffect(() => {
    // Save cart data to local storage whenever it changes
    localStorage.setItem("cartData", JSON.stringify(cartData));
  }, [cartData]);

  useEffect(() => {
    // Save favorite data to local storage whenever it changes
    localStorage.setItem("favoriteData", JSON.stringify(favoriteData));
  },[favoriteData]);

  const totalPrice = cartData.reduce(
    (total, product) => total + product.cost * product.quantity,
    0
  );

  const handleAddToCart = (selectedProduct) => {
    const productExists = cartData.some(
      (product) => product.id === selectedProduct.id
    );

    if (productExists) {
      // Agar mahsulot allaqachon savatda mavjud bo'lsa, uning quantity'sini o'zgartiramiz
      const updatedCartData = cartData.map((product) =>
        product.id === selectedProduct.id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
      setCartData(updatedCartData);
    } else {
      // Agar mahsulot savatda mavjud emas bo'lsa, uni savatga qo'shamiz va quantity'sini 1 qilamiz
      setCartData((prevCartData) => [
        ...prevCartData,
        { ...selectedProduct, quantity: 1 },
      ]);
    }
  };


  const handleAddToFavorite = (selectedProduct) => {
    const productExists = favoriteData.some(
      (product) => product.id === selectedProduct.id
    );

    if (productExists) {
      handleRemoveFromFavorite(selectedProduct.id);
    }

  
    if (productExists) {
      // Agar mahsulot allaqachon savatda mavjud bo'lsa, uning quantity'sini o'zgartiramiz
      const updatedFavoriteData = favoriteData.map((product) =>
        product.id === selectedProduct.id
          ? { ...product, favorite: true }
          : product
      );
      setFavoriteData(updatedFavoriteData);
    } else {
      // Agar mahsulot savatda mavjud emas bo'lsa, uni savatga qo'shamiz va favorite'sini 1 qilamiz
      setFavoriteData((prevFavoriteData) => [
        ...prevFavoriteData,
        { ...selectedProduct, favorite: false },
      ]);
    }
  };

  // console.log(favoriteData, favoriteData.length);

  const handleRemoveFromFavorite = (id) => {
    const newFavoriteData = favoriteData.filter((product) => product.id !== id);
    setFavoriteData(newFavoriteData);
  };

  const toggleFavorite = (selectedProduct) => {
  const productIndex = favoriteData.findIndex(
    (product) => product.id === selectedProduct.id
  );

  if (productIndex !== -1) {
    // Ürün favori listesinde bulunuyorsa, kaldır
    const updatedFavoriteData = [...favoriteData];
    updatedFavoriteData.splice(productIndex, 1);
    setFavoriteData(updatedFavoriteData);
    setFavoriteLike(false)
  } else {
    // Ürün favori listesinde bulunmuyorsa, ekle
    setFavoriteData((prevFavoriteData) => [
      ...prevFavoriteData,
      { ...selectedProduct, favorite: true },
    ]);
    setFavoriteLike(true)
  }
};

console.log(favoriteLike)


  // my cart page
  const handleRemoveFromCart = (id) => {
    const newCartData = cartData.filter((product) => product.id !== id);
    setCartData(newCartData);
  };
 
  const handleRemoveQuantityFromCart = (id) => {
    const updatedCartData = cartData.map((product) =>
      product.id === id
        ? { ...product, quantity: Math.max(0, product.quantity - 1) }
        : product
    );
    setCartData(updatedCartData.filter((product) => product.quantity > 0));
  };

  // my cart page
  const removeAllItems = () => {
    setCartData([]);
  };

  // product page for
  const filterByName = (event) => {
    const searchTerm = event.target.value;
    searchTerm.toLowerCase();
    const regex = new RegExp(searchTerm, 'i');
    setProducts(data.filter(product => regex.test(product.title.toLowerCase())));
  }

  return (
    <div className="bg-[rgb(248,249,250)]">
      <ShoppingCartContext.Provider
        value={{
          cartData,
          setCartData,
          handleAddToCart,
          handleRemoveFromCart,
          removeAllItems,
          handleRemoveQuantityFromCart,
          totalPrice,
          products,
          filterByName,
          handleAddToFavorite,
          favoriteData,
          setFavoriteData,
          handleRemoveFromFavorite,
          toggleFavorite,
          favoriteLike,
          setFavoriteLike,
          openModal,
          closeModal,
          isOpen
        }}
      >
        <Header />
        <div>
          <CatalogCategory/>
        </div>
        <DrawerOffcanvas/>
        <Outlet />
        <Footer />
      </ShoppingCartContext.Provider>
    </div>
  );
};

export default MainLayout;
