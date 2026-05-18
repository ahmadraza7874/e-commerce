"use client";

import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useRouter } from "next/navigation";
import { MapPin } from "lucide-react";

export default function CheckOut() {
  const { cart, totalBill, clearCart } = useCart();
  const navigate = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: ""
  });

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setForm({ ...form, [e.target.name]: e.target.value });
};

 const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (!form.name || !form.email || !form.address) {
    alert("Please fill all required fields");
    return;
  }

  clearCart();

  setForm({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: ""
  });

  navigate.push("/order-confirmation");
};




  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-start
     bg-gray-950 px-4 py-8 gap-10">
      
      {/* Left: Checkout Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-8 rounded-2xl shadow-2xl w-full max-w-lg space-y-5"
      >
        <h2 className="text-3xl font-bold text-orange-400 text-center mb-6
        flex items-center space-x-3 border-b border-gray-700 pb-4">
          <MapPin className="h-4 w-7 text-orange-500"/>
          Shipping Information
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none"
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none"
          required
        />
        <div className="flex gap-3">
          <input
            type="text"
            name="city"
            placeholder="City"
            value={form.city}
            onChange={handleChange}
            className="w-1/2 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none"
          />
          <input
            type="text"
            name="zip"
            placeholder="ZIP / Postal Code"
            value={form.zip}
            onChange={handleChange}
            className="w-1/2 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none"
          />
        </div>

        <div className="flex justify-between text-white font-semibold text-lg">
          <span>Total:</span>
          <span>RS {totalBill.toFixed(2)}</span>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-orange-600 text-white font-bold rounded-xl hover:bg-orange-700 transition"
        >
          Place Order
        </button>
      </form>

      {/* Right: Order Summary */}
      <div className="bg-gray-900 p-8 rounded-2xl shadow-2xl w-full max-w-md text-white">
        <h3 className="text-2xl font-bold mb-6">Order Summary</h3>

        {cart.length === 0 ? (
          <p className="text-gray-400">No items in order summary</p>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between">
                <span>
                  {item.name} x {item.quantity}
                </span>
                <span>RS {(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}

            <div className="flex justify-between pt-6 border-t border-gray-700 text-xl font-bold">
              <span>Total:</span>
              <span>RS {totalBill.toFixed(2)}</span>
            </div>
          </div>
        )}
      </div>

    </div>
  );
}



