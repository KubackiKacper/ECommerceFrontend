
import React, { useState, useEffect, MouseEvent } from 'react'
import './Product.css'
import apiUrls from '../../urlList.tsx'
import { FaCartArrowDown } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
// test 2
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
    
      {apiData && apiData.map((product)=>(
        
      <div className='product_item' key={product.id}>
        <div className='button_div'>
          <button className='button' onClick={()=>{onDetailClick(product.id)}}><FaInfoCircle/></button>
          <button onClick={notify} className='button'><FaCartArrowDown/></button>
        </div>
        <h1>{product.name}</h1>
        <img src={product.imageURL} className='product_image'></img>
        <h2>{product.price} $</h2>
        {expandedProduct ===product.id && (
          <div className='product_details'>
            <h1>Category: {product.categoryId}</h1>
            <h1>Description: {product.description}</h1>
            <h1>Stock Quantity:{product.stockQuantity}</h1>
          </div>
        )}
        
      </div>
      
      ))}
      <ToastContainer/>
    </>
  )
}
export default Product