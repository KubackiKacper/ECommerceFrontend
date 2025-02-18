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
      <button className='cart_button rounded-circle' onClick={notify}>
        <FaShoppingCart />
        <div className=' rounded-circle bg-danger d-flex justify-content-center 
        align-items-center' style={{
          color:"white",
          fontSize:"16px", 
          width:"1.2rem", 
          height:"1.2rem", 
          position:"absolute", 
          bottom:0,
          right:0,
          transform:"translate(25%,25%)"}}>
            3
        </div>
      </button>
    </div>
    <ToastContainer/>
    </>
  )
}

export default CartButton