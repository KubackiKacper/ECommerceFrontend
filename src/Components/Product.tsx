
import React, { useState, useEffect } from 'react'
import './Product.css'

interface Product{
  id: number;
  name: string;
  description: string;
  price: string;
  stockQuantity: string;
  categoryId: string;
  imageURL:string;
}

const Users = () => {
  const apiUrl = "https://localhost:7161/ECommerce/GetProducts"
  const [apiData, setApiData] = useState<Product[] | null>(null);
  
  useEffect(()=>
  {
    fetchDataApi()
  },[]
  )
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
      <div className='product_container'>
        <h1>{product.name}</h1>
        <img src={product.imageURL}></img>
      </div>
      
      ))}
    </>
  )
}
export default Users