import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

import { useShoppingCart } from '../context/ShoppingCartContext';
import { CartItem } from './CartItem';
import formatCurrency from './formatCurrency';

const CheckoutView = () => {
  const {cartItems,products} = useShoppingCart()
  
  let navigate = useNavigate();
  const GoBackButton = () =>{
      const path = "/"
      navigate(path);
    }
  
 
  return (
    <>
      {cartItems.length===0 ? <div className="alert alert-danger">NO ITEMS IN CART, CANNOT PROCEED TO CHECKOUT</div> :
        <Container>
          <p style={{fontSize:"20px"}}>Please provide informations below</p>
          <Form>
            <Row>
                <Col>
                <Row className="justify-content-md-center mb-3">
                  <Col>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your name" />
                  </Col> 
                  <Col>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your last name" />
                  </Col>
                </Row>
                <Row className="justify-content-md-center mb-3">
                  <Col>
                    <Form.Label>E-Mail</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your e-mail" />
                  </Col>
                </Row>
                <Row className="justify-content-md-center mb-3">
                  <Col>
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your e-mail" />
                  </Col>
                </Row>
                <Row className="justify-content-md-center mb-3">
                  <Col>
                    <Form.Label>Card Information</Form.Label>
                    <Form.Control type="text" placeholder="Enter name on card" />
                  </Col>
                  <Col>
                    <Form.Label>Credit card number</Form.Label>
                    <Form.Control type="text" placeholder="Enter credit card number" />
                  </Col>
                </Row>
                <Row className="justify-content-md-center mb-3">
                  <Col>
                    <Form.Label>Expiration Date</Form.Label>
                    <Form.Control type="date" />
                  </Col>
                  <Col>
                    <Form.Label>CVV</Form.Label>
                    <Form.Control type="text" placeholder="Enter CVV number" />
                  </Col>
                </Row>
                <Row className="">
                  <Col className='mr-5'>
                    <Button type='submit' style={{ background: "violet", border: "none", marginRight:"3px" }}>Proceed</Button>
                    <Button style={{ background: "gray", border: "none" }} onClick={()=>GoBackButton()}>Go Back</Button>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Form.Label size="lg">Your Cart</Form.Label>
                {cartItems.map(item => <CartItem key={item.id} {...item} />)}

                <div className='ms-auto fs-3'>Total {formatCurrency(
                  cartItems.reduce((total,cartItem)=>{
                  const item = products.find(p => p.id === cartItem.id); 
                  return total + (Number(item?.price)||0) * cartItem.quantity
                },0))}
              </div>
              </Col>
              
            </Row>
          </Form>
        </Container>
      }
    </>
    
  )
}


export default CheckoutView