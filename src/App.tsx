import { useState } from 'react'
import Product from './Components/Product.tsx'
import './App.css'
import CartButton from './Components/CartButton.tsx'


function App() {
  
  
  return (
   <div className='product_container'>
    
    <CartButton/>
    <Product/>
    <Product/>
    
   </div> 
  )
}

export default App
