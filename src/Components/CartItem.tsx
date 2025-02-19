import React from 'react'
import { useShoppingCart } from '../context/ShoppingCartContext';

interface ICartItemProps {
  id: number;
  quantity: number;
}

interface IProductProps {
  id: number;
  name: string;
  description: string;
  price: string;
  stockQuantity: string;
}

// Poprawiona funkcja
export const CartItem = ({ id, quantity }: ICartItemProps) => {
  const { cartItems } = useShoppingCart(); // Pobieramy koszyk

  // Znajdujemy produkt na podstawie `id`
  const item = cartItems.find((i) => i.id === id);

  if (!item) return null; // Jeśli produkt nie istnieje, nie renderujemy nic

  return (
    <>
      <span>{item.id}</span> <span>{item.quantity}</span>
    </>
  );
};
