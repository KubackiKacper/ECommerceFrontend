
import React, { useState, useEffect, MouseEvent } from 'react'
import './Product.css'
import { FaCartArrowDown } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";

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
  const apiUrl = "https://localhost:7161/ECommerce/GetProducts"
  const [apiData, setApiData] = useState<Product[] | null>(null);

  useEffect(()=>
  {
    fetchDataApi()
  },[]
  )
//test
  const fetchDataApi = async () =>
  {
    try{
      const response = await fetch (apiUrl);
      const data = await response.json();
      setApiData(data);
      console.log(data)
    }
    catch(error)
  {
    console.error("No data found", error)
  }
  
  };
  
  return (
    <>
    
      {apiData && apiData.map((product)=>(
        
      <div className='product_item'>
        <div className='button_div'>
          <button className='button'><FaInfoCircle/></button>
          <FaCartArrowDown type="button" className='button'/>
        </div>
        <h1>{product.name}</h1>
        <img src={product.imageURL} className='product_image' width="700px"></img>
        <h2>{product.price} $</h2>
      </div>
      
      ))}
    </>
  )
}
export default Product