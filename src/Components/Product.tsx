
import React, { useState, useEffect, MouseEvent } from 'react'
import './Product.css'
import apiUrls from '../../urlList.tsx'
import { FaCartArrowDown } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import {Button, Card, Col,Row} from "react-bootstrap";
import ProductShoppingCard from './ProductShoppingCard.tsx'


interface IProductProps{
  id: number;
  name: string;
  description: string;
  price: string;
  stockQuantity: string;
  categoryId: string;
  imageURL:string;
}

const Product = () => {
  const [apiData, setApiData] = useState<IProductProps[] | null>(null);

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
      {apiData && apiData.map((products)=>(
        <Col key={products.id}>
          <ProductShoppingCard 
            id={products.id} 
            name={products.name}
            price= {products.price}
            imageURL={products.imageURL}
          />
        </Col>
      
      ))}
      </Row>
      <ToastContainer/>
      
    </>
  )
}
export default Product