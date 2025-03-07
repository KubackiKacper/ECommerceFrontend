
import apiUrls from '../../urlList';
import { ShoppingCart } from '../Components/ShoppingCart';
import React, { useState, useEffect, createContext, useContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { IProductProps } from '../Components/Product';
import { ICartItemProps } from '../Components/CartItem';

interface IShoppingCartContext {
  products: IProductProps[]; 
  cartQuantity: number;
  cartItems: ICartItemProps[];
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  getItemQuantity: (id: number) => number;
  openCart: () => void;
  closeCart: () => void;
  removeFromCart: (id: number) => void;
}

const ShoppingCartContext = createContext({} as IShoppingCartContext);

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};

export const ShoppingCartProvider = ({ children }: { children: React.ReactNode }) => {
  const [products, setProducts] = useState<IProductProps[]>([]); 
  const [cartItems, setCartItems] = useLocalStorage<ICartItemProps[]>("default",[]);
  const [isOpen, setIsOpen] = useState(false)
  const fetchDataApi = async () => {
    try {
      const response = await fetch(apiUrls.productsUrl.urlLink); 
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('No data found', error);
    }
  };

  useEffect(() => {
    fetchDataApi();
  }, []);

  const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0);

  const getItemQuantity = (id: number) => {
    return cartItems.find(item => item.id === id)?.quantity || 0;
  };

  const increaseCartQuantity = (id: number) => {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map(item =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
    });
  };

  const removeFromCart = (id:number) =>
  {
    setCartItems(currItems=>
    {
      return currItems.filter(item => item.id !==id)
    })
  }
  const decreaseCartQuantity = (id: number) => {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id)?.quantity === 1) {
        return currItems.filter(item => item.id !== id);
      } else {
        return currItems.map(item =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
    });
  };

  const openCart=()=>
    {
      setIsOpen(true)
    }
    const closeCart=()=>
      {
        setIsOpen(false)
      }

  return (
    <ShoppingCartContext.Provider
      value={{
        products,
        cartQuantity,
        cartItems,
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        openCart,
        closeCart,
        removeFromCart
      }}
    >
      {children}
      <ShoppingCart isOpen={isOpen}/>
    </ShoppingCartContext.Provider>
  );
};
