





// import { createContext, useContext, useState, useEffect, useMemo } from "react";

// const CartContext = createContext();
// useEffect(() => {
//   localStorage.setItem("cart", JSON.stringify(cart));
// }, [cart]);

// const [cart, setCart] = useState(() => {
//   const savedCart = localStorage.getItem("cart");
//   return savedCart ? JSON.parse(savedCart) : [];
// });
// export const CartProvider = ({ children }) => {

//   const [cart, setCart] = useState(() => {
//     const savedCart = localStorage.getItem("cart");
//     return savedCart ? JSON.parse(savedCart) : [];
//   });

//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cart));
//   }, [cart]);

//   const addToCart = (product) => {
//     setCart((prevCart) => {
//       const existingItem = prevCart.find(
//         (item) => item.id === product.id
//       );

//       if (existingItem) {
//         return prevCart.map((item) =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       } else {
//         return [...prevCart, { ...product, quantity: 1 }];
//       }
//     });
//   };

//   const removeFromCart = (product) => {
//     setCart((prevCart) =>
//       prevCart.filter((item) => item.id !== product.id)
//     );
//   };

//   const decreaseQuantity = (product) => {
//     setCart((prevCart) => {
//       const existingItem = prevCart.find(
//         (item) => item.id === product.id
//       );

//       if (existingItem.quantity > 1) {
//         return prevCart.map((item) =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity - 1 }
//             : item
//         );
//       } else {
//         return prevCart.filter(
//           (item) => item.id !== product.id
//         );
//       }
//     });
//   };

//   const clearCart = () => {
//     setCart([]);
//   };

//   const cartCount = cart.reduce(
//     (total, item) => total + item.quantity,
//     0
//   );

//   const totalBill = useMemo(() => {
//     return cart.reduce((total, item) => {
//       return total + Number(item.price || 0) * Number(item.quantity || 0);
//     }, 0);
//   }, [cart]);

//   return (
//     <CartContext.Provider
//       value={{
//         cart,
//         addToCart,
//         removeFromCart,
//         decreaseQuantity,
//         clearCart,
//         cartCount,
//         totalBill,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);

"use client";

import { createContext, useContext, useState, useEffect, useMemo, ReactNode } from "react";
type Product = {
  id: string | number;
  name: string;
  price: number;
};

type CartItem = {
  id: string | number;
  name: string;
  price: number;
  quantity: number;
};
type CartContextType = {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  decreaseQuantity: (product: Product) => void;
  clearCart: () => void;
  cartCount: number;
  totalBill: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

// Custom hook with safety check
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }:{children:ReactNode}) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Load cart from localStorage (client only)
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);


  // Add to cart
  const addToCart = (product:Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // Remove item
  const removeFromCart = (product:Product) => {
    setCart((prev) => prev.filter((item) => item.id !== product.id));
  };

  // Decrease quantity
  const decreaseQuantity = (product:Product) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Clear cart
  const clearCart = () => setCart([]);

  // Derived values (optimized)
  const cartCount = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  }, [cart]);

  const totalBill = useMemo(() => {
    return cart.reduce(
      (sum, item) => sum + Number(item.price || 0) * item.quantity,
      0
    );
  }, [cart]);

  // Memoized context value (IMPORTANT)
  const value = useMemo(
    () => ({
      cart,
      addToCart,
      removeFromCart,
      decreaseQuantity,
      clearCart,
      cartCount,
      totalBill,
    }),
    [cart, cartCount, totalBill]
  );

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};