
"use client";

import React, { useEffect, useState } from 'react'
import { useParams } from "next/navigation";
import { initialProducts } from '@/app/data/Data'
import Link from 'next/link'
import { ChevronLeft, Tag, Zap, ShoppingCart } from 'lucide-react'
import { useCart } from '@/app/context/CartContext'
type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
};
const ProductDetail = () => {
  const params = useParams();
const id = params?.id;
const productId = Number(id);
 const [product, setProduct] = useState<Product | null>(null);
 console.log('product image:',product?.image)

const {addToCart} =useCart()
  const [currentImage, setCurrentImage] = useState(0);
useEffect(() => {
  if (!id) return;

  const found = initialProducts.find(
    (data) => data.id === Number(id)
  );

  setProduct(found ?? null);
}, [id]);
if (!product) {
  return <div className="text-white">Product not found</div>;
}
  return (
    <>

      <div className="container mx-auto px-4 md:px-8 bg-gray-900 min-h-screen
rounded-2xl shadow-2xl my-8 p-6 md:p-12 border border-gray-800">
        <Link href={'/'}>
          <button className='flex items-center text-gray-400 hover:text-orange-400
  transition duration-200 font-semibold text-lg cursor-pointer'>
            <ChevronLeft className='w-6 h-6 mr-1' />
            <span>back to all products</span>
          </button>
        </Link>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-1' >

          {product && (
        <Link href={`/product/${product.id}/gallery`}>
            <img
              src={product.image}
              alt={product.name}

              className='w-96 h-96  object-contain  rounded-2xl shadow-2xl 
shadow-gray-950/50 border-4 border-gray-800'
            /></Link>

          )}


  



          <div className='flex flex-col justify-between '>
            <div>
              <h1 className='text-4xl text-white font-extrabold mb-4 
      leading-tight tracking-tighter'>{product?.name}</h1>
            </div>
            <p className=' text-orange-400
    text-3xl font-extrabold mb-4 '>{product?.price.toFixed(2)}</p>
            <h2 className='text-xl  font-bold text-gray-200 mb-2 border-b
    border-e-orange-900/50 pb-2 flex items-center space-x-2'>
              <Tag className="w-5 h-5 text-orange-500 " />
              <span>Product Overview</span>
            </h2>
            <p className='text-gray-500 text-lg leading-relaxed mb-3 '>
              {product?.description}
            </p>
            <ul className='space-y-3 text-gray-300 p-4 bg-gray-800 rounded-xl
                border border-gray-700'>
              <li className='flex items-center space-x-3 text-lg'>
                <Zap className="w-5 h-5 text-orange-500 mt-2 mr-2 hidden sm:block ml-6" />
                <span>High-Quality,Professional Grade Material</span>
              </li>
              <li className='flex items-center space-x-3 text-lg'>
                <Zap className="w-5 h-5 text-orange-500 mt-2 mr-2 hidden sm:block ml-6" />
                <span>Comprehensive 1-Year Manufacturer Warranty</span>
              </li>
              <li className='flex items-center space-x-3 text-lg'>
                <Zap className="w-5 h-5 text-orange-500 mt-2 mr-2 hidden sm:block ml-6" />
                <span>Immediate Shopping For in-Stock Items</span>
              </li>
            </ul>

            <div className='mt-5 space-y-4 flex justify-center items-center flex-col '>
              <button  onClick={() => product && addToCart(product)}
              className=" w-full py-3 bg-orange-600 text-white font-bold
  rounded-full shadow-lg shadow-orange-800/50 cursor-pointer hover:bg-orange-700 
  transition duration-200 flex items-center justify-center space-x-2 transform
  hover:ring-4 hover:ring-pink-600/50 uppercase tracking-wider">
                <ShoppingCart className='w-6 h-6 text-white' />
                <span>Add to Cart</span>
              </button>

              <Link href={'/'} className='w-full py-3 text-orange-400
              border-orange-600 font-bold
  rounded-full border-2 cursor-pointer hover:bg-orange-900/50 
  transition duration-200  uppercase tracking-wider text-center'>
              Keep Shopping
              </Link>
            </div>



          </div>




        </div>


      </div>

    </>
  )
}

export default ProductDetail
