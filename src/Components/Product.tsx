
import React, { useState, useEffect, MouseEvent } from 'react'
import './Product.css'
import apiUrls from '../../urlList.tsx'
import { FaCartArrowDown } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import {Button, Card, Col,Row} from "react-bootstrap"
interface Product{
  id: number;
  name: string;
  description: string;
  price: string;
  stockQuantity: string;
  categoryId: string;
  imageURL:string;
}

const Product = () => {
  const quantity:number =3;

  const notify = () =>{
      toast.success('Item added to the cart!', {
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
  
  const [apiData, setApiData] = useState<Product[] | null>(null);

  const [expandedProduct, setExpandedProduct] = useState<number | null>(null);

  const onDetailClick = (id: number) => {
    setExpandedProduct((prev) => (prev === id ? null : id));
  };


  useEffect(()=>
  {
    fetchDataApi()
  },[]
  )
  const fetchDataApi = async () =>
  {
    try{
      const response = await fetch (apiUrls.productsUrl.urlLink);
      const data = await response.json();
      setApiData(data);
    }
    catch(error)
  {
    console.error("No data found", error)
  }
  
  };
  
  return (
    <>
      <Row md={2} xs={1} lg={4} className='g-3'>
      {apiData && apiData.map((product)=>(
        <Col key={product.id}>
          <Card className='h-100' style={{borderColor: "violet"}}>
            <Card.Img variant="top" src={product.imageURL} className='product_image'></Card.Img>
            <Card.Body className='d-flex flex-column' >
              <Card.Title className='d-flex justify-content-between align-items-baseline mb-4'>
                <span>{product.name}</span>
                <span>{product.price}$</span>
              </Card.Title>
              <div className='mt-auto'>
                {quantity===0 ?<button onClick={notify} className='button'><FaCartArrowDown/></button>:
                <div className='d-flex align-items-center' style={{gap:"0.5rem"}}>
                  <div className='d-flex align-items-center justify-content-center' style={{gap:"0.5rem"}}>
                    <Button size='sm'>-</Button>
                    <div className='fs-4'>{quantity}</div>
                    <Button size='sm'>+</Button>
                  </div>
                </div>
                }
                
              </div>
            </Card.Body>
          </Card>
        </Col>
        
      // <div className='product_item' key={product.id}>
      //   <div className='button_div'>
      //     <button className='button' onClick={()=>{onDetailClick(product.id)}}><FaInfoCircle/></button>
      //     <button onClick={notify} className='button'><FaCartArrowDown/></button>
      //   </div>
      //   <h1>{product.name}</h1>
      //   <img src={product.imageURL} className='product_image'></img>
      //   <h2>{product.price} $</h2>
      //   {expandedProduct === product.id && (
      //     <div className='product_details'>
      //       <h1>Category: {product.categoryId}</h1>
      //       <h1>Description: {product.description}</h1>
      //       <h1>Stock Quantity:{product.stockQuantity}</h1>
      //     </div>
      //   )}
        
      // </div>
      
      ))}
      </Row>
      <ToastContainer/>
      
    </>
  )
}
export default Product