import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import './CartButton.css'
import { ToastContainer, toast } from 'react-toastify';


const CartButton = () => {
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
      <button className='cart_button' onClick={notify}><FaShoppingCart /></button>
    </div>
    <ToastContainer/>
    </>
  )
}

export default CartButton