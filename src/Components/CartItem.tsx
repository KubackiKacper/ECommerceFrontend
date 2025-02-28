import React from 'react';
import { useShoppingCart } from '../context/ShoppingCartContext';
import {Button, Stack } from 'react-bootstrap'
import formatCurrency from './formatCurrency';

export interface ICartItemProps {
  id: number;
  quantity: number;
}

export const CartItem = ({ id, quantity }: ICartItemProps) => {
  const { products,removeFromCart } = useShoppingCart();
  const item = products.find(p => p.id === id); 
  if (!item) return null;
  
  return (

    <>
      <Stack direction='horizontal' gap={2} className='d-flex align-items-center'>
        <img src={item.imageURL} style={{width:"125px", height:"125px", objectFit:"scale-down"}}></img>
        <div className='me-auto'>
          <div>
            {item.name} {quantity>1 && <span className='text-muted' style={{fontSize:"0.75rem"}}>x{quantity}</span>}
          </div>
          <div className='text-muted' style={{fontSize:"0.75rem"}}>
            {item.price}$
          </div>
        </div>
        <div>
          {formatCurrency(Number(item.price) * Number(quantity))}
        </div>
        <div>
          
        </div>
        <Button variant='outline-danger' size='sm' onClick={()=>removeFromCart(item.id)}>x</Button>
      </Stack>
      
    </>
  );
};
