import React, { useState } from 'react'
import { Button, Offcanvas, Stack } from 'react-bootstrap'
import { useShoppingCart } from '../context/ShoppingCartContext'
import { CartItem } from './CartItem'
import CheckoutButton from './CheckoutView'
import { useNavigate } from 'react-router-dom'

interface IShoppingCartProviderProps{
  isOpen:boolean
}

export const ShoppingCart = ({isOpen}:IShoppingCartProviderProps) => {
  const {closeCart, cartItems} = useShoppingCart()
  const [buttonClicked,setButtonClicked] = useState<boolean>(false);
  let navigate = useNavigate();
  const changeWindow = () => {
    const path = "/checkout"
    navigate(path);
  }
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
        {cartItems.length === 0 ? <p>No items in cart!</p> : (
        <>
          {cartItems.map(item => <CartItem key={item.id} {...item} />)}
          <Button 
            onClick={() => { changeWindow(); closeCart(); }} 
            style={{ background: "violet", border: "none" }}>
            Checkout
          </Button>
        </>
        )}
        </Stack>
      </Offcanvas.Body>
      
    </Offcanvas>
  );
};
