import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

import { useShoppingCart } from '../context/ShoppingCartContext';
import { CartItem } from './CartItem';
import formatCurrency from './formatCurrency';
import apiUrls from '../../urlList';
import { Bounce,toast } from 'react-toastify';


//texst

interface IFormProps{
  email?:string,
  totalPrice?:number,
  orderDate?:Date,
  address?: string,
  paymentMethod?:string,
  status?:string,
  cardName?:string,
  cardNumber?:string,
  cardCVV?:string,
  cardExpirationDate?:Date
}

const CheckoutView = () => {
  const {cartItems,products} = useShoppingCart()
  const [formStateValues, setFormStateValues] = useState<IFormProps | null>(null);
  const [checkoutClicked, setCheckoutClicked] = useState<boolean>(false)
  const [validated,setValidated] = useState<boolean>(false);

  const notify=()=>{
    toast.info('Order placed successfully! Thank you!', {
    position: "top-left",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
    })};

  
  const timeout = (delay: number)=>{
    return new Promise( res => setTimeout(res, delay) );
  }
  const checkoutTotal = cartItems.reduce((total,cartItem)=>{
    const item = products.find(p => p.id === cartItem.id); 
    return total + (Number(item?.price)||0) * cartItem.quantity
  },0)

  let navigate = useNavigate();
  const path = "/";
  const GoBackButton = () =>{
     
      navigate(path);
    }

  
  const handleSubmit =(e:React.FormEvent<HTMLFormElement>)=>{
    const form = e.currentTarget;
    if (form.checkValidity()===false)
      {
        e.preventDefault();
        e.stopPropagation();
      }
    else
    {
      
    e.preventDefault();
    setCheckoutClicked(true)
    console.log(formStateValues)
    
    setValidated(true)

    if(formStateValues)
    {
      formStateValues.totalPrice = Math.round(checkoutTotal*100)/100;
      formStateValues.orderDate = new Date(Date.now());
      formStateValues.paymentMethod = "Card";
      formStateValues.status = "Pending";
    }
    fetch(apiUrls.placeOrderUrl.urlLink,{
      method:'POST',
      headers:{"Content-Type": "application/json"},
      body: JSON.stringify(formStateValues)
    }).then(async ()=>{
      
      notify();
      await timeout(5000)
      navigate(path)
      window.localStorage.clear();
      window.location.reload();
      
    })

  }}
  
  const handleChange =(e:React.ChangeEvent<HTMLInputElement >)=>{
    setFormStateValues({...formStateValues,[e.target.name]:e.target.value})
    
  }
 
  return (
    <>
      {cartItems.length===0 ? <div className="alert alert-danger">NO ITEMS IN CART, CANNOT PROCEED TO CHECKOUT</div> :
        <Container>
          <p style={{fontSize:"20px"}}>Please provide informations below</p>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row>
                <Col>
                <Row className="justify-content-md-center mb-3">
                  <Col>
                  <Form.Group controlId='email'>
                    <Form.Label>E-Mail</Form.Label>
                    <Form.Control required type="text" placeholder="Enter Your e-mail" name={"email"} 
                    onChange={handleChange} value={formStateValues?.email} isInvalid={validated && !/^[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]+$/.test(formStateValues?.email || '')}/>
                    <Form.Control.Feedback type="invalid">Please enter a valid username (alphanumeric characters only).</Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="justify-content-md-center mb-3">
                  <Col>
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your address" required name={"address"} onChange={handleChange}/>
                  </Col>
                </Row>
                <Row className="justify-content-md-center mb-3">
                  <Col>
                    <Form.Label>Card Information</Form.Label>
                    <Form.Control type="text" placeholder="Enter name on card" name={"cardName"} onChange={handleChange}/>
                  </Col>
                  <Col>
                    <Form.Label>Credit card number</Form.Label>
                    <Form.Control type="text" placeholder="Enter credit card number" name={"cardNumber"} onChange={handleChange}/>
                  </Col>
                </Row>
                <Row className="justify-content-md-center mb-3">
                  <Col>
                    <Form.Label>Expiration Date</Form.Label>
                    <Form.Control type="date" name={"cardExpirationDate"} onChange={handleChange}/>
                  </Col>
                  <Col>
                    <Form.Label>CVV</Form.Label>
                    <Form.Control type="text" placeholder="Enter CVV number" name={"cardCVV"} onChange={handleChange}/>
                  </Col>
                </Row>
                <Row className="">
                  <Col className='mr-5'>
                    <Button type='submit' disabled={checkoutClicked} style={{ background: "violet", border: "none", marginRight:"3px" }}>Proceed</Button>
                    <Button disabled={checkoutClicked} style={{ background: "gray", border: "none" }} onClick={()=>GoBackButton()}>Go Back</Button>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Form.Label size="lg">Your Cart</Form.Label>
                {cartItems.map(item => <CartItem key={item.id} {...item} />)}

                <div className='ms-auto fs-3'>Total {formatCurrency(checkoutTotal)}
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

