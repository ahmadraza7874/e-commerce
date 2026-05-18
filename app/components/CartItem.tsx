"use client";

import { useCart } from "../context/CartContext";
type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};
type Product = {
  id: number;
  name: string;
  price: number;
  image: any;
  description: string;
  category: string;
};
export default function CartItem({ item }: any) {
  const { addToCart, decreaseQuantity, removeFromCart } = useCart();

  if (!item) return null;

  return (
    <div className="flex items-center justify-between bg-gray-800 p-4 rounded-2xl shadow-md">
      
      <img
        src={item.image}
        alt={item.name}
        className="w-20 h-20 object-cover rounded-lg"
      />

      <div className="flex-1 ml-4">
        <h3>{item.name}</h3>
        <p>RS {item.price}</p>

        <div className="flex gap-2 mt-2">
          
          <button onClick={() => decreaseQuantity(item)}>
            -
          </button>

          <span>{item.quantity}</span>

          <button onClick={() => addToCart(item)}>
            +
          </button>

        </div>
      </div>

      <button onClick={() => removeFromCart(item)}>
        X
      </button>

    </div>
  );
}