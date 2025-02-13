import { useState } from 'react'
import Product from './Components/Product.tsx'
import './App.css'
import CartButton from './Components/CartButton.tsx'


function App() {
  
  
  return (
    <>
    <CartButton/>
    <div className='product_container'>
      <Product/>
      <Product/>
    </div> 
   </>
  )
}

export default App
