import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import './CartButton.css'
import { ToastContainer, toast } from 'react-toastify';
import { useShoppingCart } from '../context/ShoppingCartContext'

const CartButton = () => {
  const {openCart,cartQuantity} = useShoppingCart()
  const notify = () =>{
    toast.info('Redirecting To Cart', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  };
  return (
    <>
    <div className='cart_button_container'>
      <button className='cart_button rounded-circle' onClick={openCart}>
        <FaShoppingCart />
        <div className=' rounded-circle bg-danger d-flex justify-content-center 
        align-items-center cart_button_quantity'>
            {cartQuantity}
        </div>
      </button>
    </div>
    <ToastContainer/>
    </>
  )
}

export default CartButton