import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import './CartButton.css'
import { ToastContainer, toast } from 'react-toastify';
import { useShoppingCart } from '../context/ShoppingCartContext'

const CartButton = () => {
  const {openCart,cartQuantity} = useShoppingCart()
  
  
  return (
    <>
    <div className='cart_button_container'>
      <button className='cart_button rounded-circle' onClick={openCart}>
        <FaShoppingCart />
        <div className=' rounded-circle bg-white d-flex justify-content-center 
        align-items-center cart_button_quantity'  style={{color:"violet"}}>
            {cartQuantity}
        </div>
      </button>
    </div>
    <ToastContainer/>
    </>
  )
}

export default CartButton