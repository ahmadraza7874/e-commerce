
import React from "react";
import Link from "next/link";
import { CheckCircle, ShoppingBag } from "lucide-react";

export default function OrderConfirmation() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 px-4">
      <div className="bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl p-10 max-w-lg w-full text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle className="w-20 h-20 text-green-500" />
        </div>
        <h1 className="text-3xl font-extrabold text-white mb-3">
          Order Placed Successfully!
        </h1>
        <p className="text-gray-400 mb-6">
          Thank you for your purchase. Your order has been confirmed and will be shipped soon.
        </p>

        <div className="bg-gray-800 rounded-xl p-5 text-left space-y-3 mb-6">
          <div className="flex justify-between text-gray-400">
            <span>Order Number</span>
            <span className="text-white font-semibold">#ORD12345</span>
          </div>
          <div className="flex justify-between text-gray-400">
            <span>Payment Method</span>
            <span className="text-white">Cash on Delivery</span>
          </div>
          <div className="flex justify-between text-gray-400">
            <span>Delivery</span>
            <span className="text-white">2 - 4 Business Days</span>
          </div>
        </div>

        <Link
          href="/"
          className="w-full py-3 bg-orange-600 text-white font-bold rounded-xl hover:bg-orange-700 transition flex items-center justify-center gap-2"
        >
          <ShoppingBag className="w-5 h-5" />
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
