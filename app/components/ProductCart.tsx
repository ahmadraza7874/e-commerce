"use client"
import React from "react";
import Link from "next/link";
import {ShoppingCart} from 'lucide-react'
import { useCart } from "../context/CartContext";
type Product = {
  id: number;
  name: string;
  price: number;
  image: any;
  description:string;
  category:string;
};
type Props = {
  product: Product;
};
const ProductCart = ({ product }:Props) => {
    const { addToCart } = useCart();
      if (!product) return null;
  return (
 
  <div className="bg-gray-900 rounded-2xl shadow-xl flex flex-col h-full 
transition duration-500 transform border border-gray-800 
hover:scale-[1.03] hover:shadow-orange-900/40">

  <Link 
    href={`/product/${product.id}`} 
    className="relative cursor-pointer overflow-hidden group"
  >

 
    <div className="absolute  bottom-0 bg-orange-600
    text-white font-semibold px-3 py-1 rounded-r-lg z-10">
      Rs {product.price}
    </div>

    <img
      src={product.image}
      alt={product.name}
      className="w-full h-56 object-cover transition duration-500 
      group-hover:scale-110 group-hover:opacity-90 rounded-2xl"
    />

  </Link>

  <div className="p-4 text-white">
    <Link href={`/product/${product.id}`}>
    <h3 className="text-2xl font-extrabold text-white mb-2 cursor-pointer hover:text-orange-400
    transition duration-200 line-clamp-1">{product.name}</h3>
    </Link>
    <p className="text-gray-400 text-sm mt-2">
      {product.description}
    </p>
  <div className="flex items-center text-xs text-gray-500 mb-4">
      <span className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-full 
    font-semibold">{product.category}</span>
  </div>

  <button   onClick={() => addToCart(product)} className="max-auto w-full py-3 bg-orange-600 text-white font-bold
  rounded-full shadow-lg shadow-orange-800/50 cursor-pointer hover:bg-orange-700 
  transition duration-200 flex items-center justify-center space-x-2 transform
  hover:ring-4 hover:ring-pink-600/50 uppercase tracking-wider">
    <ShoppingCart  className='w-6 h-6 text-white'/>
    <span>Add to Cart</span>
  </button>
  </div>

</div>
  );
};

export default ProductCart;