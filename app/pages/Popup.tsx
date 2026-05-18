"use client";

import React from "react";
import { useParams } from "next/navigation";
import { initialProducts } from "../data/Data";

const Popup = () => {
  const params = useParams();

  const product = initialProducts.find(
    (item) => item.id.toString() === params.id
  );

  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <div>
      <img
        src={product.image}
        alt={product.name}
        className="w-96 h-96 object-contain rounded-2xl"
      />
    </div>
  );
};

export default Popup;