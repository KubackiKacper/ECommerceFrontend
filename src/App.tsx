import { useState } from 'react'
import Product from './Components/Product.tsx'
import './App.css'
import {Routes, Route} from "react-router-dom"
import { Container, Nav } from 'react-bootstrap'
import  NavBar  from './Components/NavBar.tsx'
import { ShoppingCartProvider } from './context/ShoppingCartContext.tsx'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import CheckoutView from './Components/CheckoutView.tsx'

function App() {
  
  
  return (
    <>
    <ToastContainer/>
    <ShoppingCartProvider>
      <NavBar/>
      <Container>
        <Routes>
          <Route path="/" element={<Product/>}></Route>
          <Route path="/checkout" element={<CheckoutView/>}></Route>
        </Routes>
      </Container>
    </ShoppingCartProvider>
    
   </>
  )
}

export default App
