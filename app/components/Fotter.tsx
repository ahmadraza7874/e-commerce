import React from "react";
import Link from "next/link";
// import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 mt-20">

      {/* Main Footer */}
      <div className="container mx-auto px-6 md:px-12 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-3xl font-extrabold text-orange-500 mb-3">
           WDMSTORE
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Discover the latest gadgets, laptops, smartphones and accessories.
            Premium tech products with the best deals and fast delivery.
          </p>

          {/* <div className="flex gap-4 mt-5">
            <Facebook className="cursor-pointer hover:text-orange-500 transition"/>
            <Instagram className="cursor-pointer hover:text-orange-500 transition"/>
            <Twitter className="cursor-pointer hover:text-orange-500 transition"/>
            <Youtube className="cursor-pointer hover:text-orange-500 transition"/>
          </div> */}
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-orange-500 transition">
                Home
              </Link>
            </li>

            <li>
              <Link href="/cart" className="hover:text-orange-500 transition">
                Cart
              </Link>
            </li>

            <li>
              <Link href="/checkout" className="hover:text-orange-500 transition">
                Checkout
              </Link>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            Categories
          </h3>

          <ul className="space-y-2">
            <li className="hover:text-orange-500 cursor-pointer">Laptops</li>
            <li className="hover:text-orange-500 cursor-pointer">Smartphones</li>
            <li className="hover:text-orange-500 cursor-pointer">Cameras</li>
            <li className="hover:text-orange-500 cursor-pointer">Accessories</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            Newsletter
          </h3>

          <p className="text-sm text-gray-400 mb-3">
            Subscribe to get updates on new products and offers.
          </p>

          <div className="flex">
            <input
              type="email"
              placeholder="Your Email"
              className="px-3 py-2 w-full rounded-l-lg bg-gray-800 border border-gray-700 focus:outline-none"
            />
            <button className="bg-orange-600 px-4 py-2 rounded-r-lg hover:bg-orange-700 transition">
              Subscribe
            </button>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 py-4 text-center text-sm text-gray-500">
        © 2026 TechStore — All Rights Reserved
      </div>

    </footer>
  );
}