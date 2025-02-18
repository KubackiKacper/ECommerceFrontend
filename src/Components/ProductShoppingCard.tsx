import React from 'react'
import {Button, Card} from "react-bootstrap"
import { FaCartArrowDown } from "react-icons/fa";
import { ToastContainer, Bounce, toast } from 'react-toastify';
import './ProductShoppingCard.css'
import { useShoppingCart } from '../context/ShoppingCartContext';
import 'react-toastify/dist/ReactToastify.css';

interface IProductCardProps{
  id: number;
  name: string;
  price: string;
  imageURL:string;
}
const ProductShoppingCard = (apiData: IProductCardProps) => {

  const notify = () => {
    toast.success("Item added to cart!", {
      position: "top-left",
      autoClose: 3000,
      
    });
  };
  const {getItemQuantity, increaseCartQuantity, decreaseCartQuantity} = useShoppingCart();
  const quantity = getItemQuantity(apiData.id)
  return (
    <>
    
        <Card className='h-100' style={{borderColor: "violet"}}>
          <Card.Img variant="top" src={apiData.imageURL} className='product_image'></Card.Img>
          <Card.Body className='d-flex flex-column' >
            <Card.Title className='d-flex justify-content-between align-items-baseline mb-4'>
              <span>{apiData.name}</span>
              <span>{apiData.price}$</span>
            </Card.Title>
            <div className='mt-auto'>
              {quantity===0 ?<button className='button' onClick={() => {
            increaseCartQuantity(apiData.id);
            notify();
          }}>
                <FaCartArrowDown/>
                <span className="text"> Add To Cart</span>
                </button>:
              <div className='d-flex align-items-center' style={{gap:"0.5rem"}}>
                <div className='d-flex align-items-center justify-content-center' style={{gap:"0.5rem"}}>
                  <Button size='sm' onClick={() =>{notify;decreaseCartQuantity(apiData.id)}}>-</Button>
                  <div className='fs-4'>{quantity}</div>
                  <Button size='sm' onClick={() =>{notify;increaseCartQuantity(apiData.id)}}>+</Button>
                </div>
              </div>
              }
              
            </div>
          </Card.Body>
        </Card>
            
  </>
    
  )
}

export default ProductShoppingCard
