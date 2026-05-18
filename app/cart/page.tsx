

"use client";
import React from "react";
import { useCart } from "../context/CartContext";
import Link from "next/link";
import CartItem from "../components/CartItem";
import { ShoppingCart, ChevronLeft, Zap } from "lucide-react";

export default function Cart() {
  const { cart, totalBill, cartCount } = useCart();

  return (
    <div className="container mx-auto px-4 md:px-8 pt-8">

      {/* Back Button */}
      <div className="flex items-center mb-10">
        <Link
          href="/"
          className="flex items-center text-gray-400 hover:text-orange-400
          transition duration-150 font-semibold text-lg"
        >
          <ChevronLeft className="w-6 h-6 mr-1" />
          <span>Back to store</span>
        </Link>
      </div>

      {/* Heading */}
      <h2 className="text-4xl font-extrabold text-white mb-10 tracking-tight">
        Shopping Cart ({cartCount})
      </h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">

          {cart.length === 0 ? (
            <div className="text-center text-gray-400 py-20">
              <ShoppingCart className="mx-auto w-16 h-16 mb-4 opacity-50" />
              <p className="text-xl">Your cart is empty</p>
            </div>
          ) : (
            cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))
          )}

        </div>

        {/* Order Summary */}
        <div
          className="lg:col-span-1 p-8 bg-gray-900 rounded-2xl shadow-2xl
          border border-gray-800 sticky top-20 h-fit"
        >

          {/* Title */}
          <h3
            className="text-3xl font-bold text-white mb-5 border-b
            border-gray-700 pb-3 flex items-center gap-2"
          >
            <ShoppingCart className="w-6 h-6 text-orange-400" />
            <span>Order Total</span>
          </h3>

          {/* Prices */}
          <div className="space-y-4 text-gray-400">

            <div className="flex justify-between text-xl">
              <span>Subtotal:</span>
              <span className="font-semibold text-white">
                RS {totalBill.toFixed(2)}
              </span>
            </div>

            <div className="flex justify-between text-xl">
              <span>Shipping (Express):</span>
              <span className="font-semibold text-green-400">Free</span>
            </div>

            <div
              className="flex justify-between pt-6 border-t
              border-gray-700"
            >
              <span className="text-2xl font-extrabold text-white">
                Estimated Total:
              </span>

              <span className="font-extrabold text-2xl text-orange-400">
                RS {totalBill.toFixed(2)}
              </span>
            </div>

            {/* Checkout Button */}
            <Link
              href="/checkout"
              className="w-full mt-8 py-4 bg-orange-600 text-white
              font-extrabold text-xl rounded-full shadow-lg
              shadow-orange-800/50 cursor-pointer hover:bg-orange-700
              transition duration-200 flex items-center justify-center
              space-x-2 transform hover:ring-4 hover:ring-pink-600/50
              uppercase tracking-wider"
            >
              <Zap className="w-6 h-6 text-white" />
              <span>Proceed Secure</span>
            </Link>

            <p className="text-xs text-gray-500 text-center mt-4">
              All transactions are encrypted and secure.
            </p>

          </div>
        </div>

      </div>
    </div>
  );
}