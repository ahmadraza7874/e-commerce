import React from 'react'
import SearchFilter from '../components/SearchFilter'
import CategoryFilter from '../components/CategoryFilter'
import { initialProducts } from '../data/Data'
import ProductCart from '../components/ProductCart'


const ProductList = () => {

  return (

    <>
      <div className="container mx-auto px-4 md:px-4 pt-8 ">
        <SearchFilter />
        <CategoryFilter />
        <h2 className='text-2xl text-white  font-bold font-serif max-auto px-4 
    md:px-5 pt-4'>Featured Gear {initialProducts.length} items</h2>


        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center
     items-center'>
          {initialProducts.map((product, index) => <ProductCart key={index} product={product} />)}


        </div>





      </div>
    </>
  )
}

export default ProductList
