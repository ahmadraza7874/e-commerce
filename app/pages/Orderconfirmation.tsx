// import React from "react";
// import { Link } from "react-router";
// import { CheckCircle, ShoppingBag, ArrowRight } from "lucide-react";
// import { useCart } from "../context/CartContext";

// export default function Orderconfirmation() {

//   const { clearCart } = useCart();

//   const handleContinue = () => {
//     clearCart();
//   };

//   return (
//     <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">

//       <div className="bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full p-10 text-center">

//         {/* Success Icon */}
//         <div className="flex justify-center mb-6">
//           <CheckCircle className="w-20 h-20 text-green-500" />
//         </div>

//         {/* Heading */}
//         <h1 className="text-4xl font-extrabold text-white mb-3">
//           Order Confirmed!
//         </h1>

//         <p className="text-gray-400 mb-8">
//           Thank you for your purchase. Your order has been placed successfully.
//           We will send you a confirmation email shortly.
//         </p>

//         {/* Order Details */}
//         <div className="bg-gray-800 rounded-xl p-6 text-left space-y-3 mb-8">

//           <div className="flex justify-between text-gray-400">
//             <span>Order Status</span>
//             <span className="text-green-400 font-semibold">
//               Successful
//             </span>
//           </div>

//           <div className="flex justify-between text-gray-400">
//             <span>Payment</span>
//             <span className="text-white font-semibold">
//               Completed
//             </span>
//           </div>

//           <div className="flex justify-between text-gray-400">
//             <span>Shipping</span>
//             <span className="text-white font-semibold">
//               Express Delivery
//             </span>
//           </div>

//         </div>

//         {/* Buttons */}
//         <div className="flex flex-col md:flex-row gap-4 justify-center">

//           <Link
//             to="/"
//             onClick={handleContinue}
//             className="flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-full transition"
//           >
//             <ShoppingBag className="w-5 h-5" />
//             Continue Shopping
//           </Link>

//           <Link
//             to="/cart"
//             className="flex items-center justify-center gap-2 border border-gray-700 text-gray-300 hover:text-white hover:border-gray-500 py-3 px-6 rounded-full transition"
//           >
//             View Cart
//             <ArrowRight className="w-5 h-5" />
//           </Link>

//         </div>

//       </div>

//     </div>
//   );
// }
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
