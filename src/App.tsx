import { useState } from 'react'
import Product from './Components/Product.tsx'
import './App.css'
import CartButton from './Components/CartButton.tsx'
import {Routes, Route} from "react-router-dom"
import { Container, Nav } from 'react-bootstrap'
import  NavBar  from './Components/NavBar.tsx'
import { ShoppingCartProvider } from './context/ShoppingCartContext.tsx'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  
  
  return (
    <>
    
    <ShoppingCartProvider>
      <NavBar/>
      <Container>
        <Routes>
          <Route path="/" element={<Product/>}></Route>
        </Routes>
      </Container>
    </ShoppingCartProvider>
    <ToastContainer/>
   </>
  )
}

export default App
