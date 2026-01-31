import { createContext, useState, useEffect } from 'react';

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem('shopzi-cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('shopzi-user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  useEffect(() => {
    localStorage.setItem('shopzi-cart', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    if (user) {
      localStorage.setItem('shopzi-user', JSON.stringify(user));
    } else {
      localStorage.removeItem('shopzi-user');
    }
  }, [user]);

  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  const removeFromCart = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    user,
    login,
    logout,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
