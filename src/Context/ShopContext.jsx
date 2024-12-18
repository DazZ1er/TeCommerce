import React, { createContext, useState, useEffect } from "react";

export const ShopContext = createContext(null);

const getDefaultCart = (products) => {
  const cartItem = {};
  products.forEach((product) => {
    cartItem[product.id] = 0;
  });
  return cartItem;
};

const ShopContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : {};
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (cart && Object.keys(cart).length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.in/api/products");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        const productData = Array.isArray(data)
          ? data
          : data.products && Array.isArray(data.products)
          ? data.products
          : [];

        setProducts(productData);
        setCart(getDefaultCart(productData));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const addToWishlist = (productId) => {
    setWishlist((prev) => {
      if (!prev.includes(productId)) {
        return [...prev, productId];
      }
      return prev;
    });
  };

  const removeFromWishlist = (productId) => {
    setWishlist((prev) => prev.filter((id) => id !== productId));
  };
  const getTotalWishlistItems = () => wishlist.length;

  const addToCart = (productId, quantity) => {
    setCart((prev) => {
      const newCart = { ...prev };
      if (newCart[productId]) {
        newCart[productId] += quantity;
      } else {
        newCart[productId] = quantity;
      }
      return newCart;
    });
  };
  const updateCartQty = (productId, qty) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (qty <= 0) {
        delete updatedCart[productId];
      } else {
        updatedCart[productId] = qty;
      }
      return updatedCart;
    });
  };
  const removeFromCart = (productId) => {
    setCart((prevItems) => {
      const updatedItems = { ...prevItems };
      delete updatedItems[productId];
      return updatedItems;
    });
  };

  const clearCart = () => {
    setCart({});
  };

  const getTotalCartAmount = () => {
    return products.reduce((total, product) => {
      const quantity = cart[product.id] || 0;
      return total + product.price * quantity;
    }, 0);
  };

  const getTotalCartItems = () => {
    return Object.values(cart).reduce((total, quantity) => total + quantity, 0);
  };
  const contextValue = {
    products,
    getTotalCartItems,
    getTotalCartAmount,
    cart,
    clearCart,
    addToCart,
    removeFromCart,
    loading,
    error,
    addToWishlist,
    removeFromWishlist,
    getTotalWishlistItems,
    wishlist,
    searchQuery,
    setSearchQuery,
    updateCartQty,
  };

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error loading products: {error}</p>;

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
