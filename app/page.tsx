"use client";

import { useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Fotter";
import SearchFilter from "./components/SearchFilter";
import CategoryFilter from "./components/CategoryFilter";
import CartItem from "./components/CartItem";
import ProductCart from "./components/ProductCart";

import { initialProducts } from "@/app/data/Data";

export default function Home() {

  const [selectedCategory, setSelectedCategory] = useState("All");

  // FILTER PRODUCTS
  const filteredProducts =
    selectedCategory === "All"
      ? initialProducts
      : initialProducts.filter(
          (item) => item.category === selectedCategory
        );

  return (
    <>
      <SearchFilter />

      <CategoryFilter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <CartItem />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">

        {filteredProducts.map((item) => (
          <ProductCart
            key={item.id}
            product={item}
          />
        ))}

      </div>
    </>
  );
}