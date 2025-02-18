import { useState } from 'react'
import Product from './Components/Product.tsx'
import './App.css'
import CartButton from './Components/CartButton.tsx'
import {Routes, Route} from "react-router-dom"
import { Container, Nav } from 'react-bootstrap'
import  NavBar  from './Components/NavBar.tsx'


function App() {
  
  
  return (
    <>
    <NavBar/>
    <Container>
      <Routes>
        <Route path="/" element={<Product/>}></Route>
      </Routes>
    </Container>
    {/* <div className='product_container'>
      
    </div>  */}
   </>
  )
}

export default App
