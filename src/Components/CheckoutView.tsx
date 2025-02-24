import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
const CheckoutView = () => {

  
  return (
    <>
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
                  <Button type='submit' style={{ background: "gray", border: "none" }}>Go Back</Button>
                </Col>
                
              </Row>
            </Col>
            <Col>
            <Form.Label size="lg">Your Cart</Form.Label>
            <ul className="list-group">
              <li className="list-group-item">An item</li>
              <li className="list-group-item">A second item</li>
              <li className="list-group-item">A third item</li>
              <li className="list-group-item">A fourth item</li>
              <li className="list-group-item">And a fifth one</li>
              <li className="list-group-item">An item</li>
              <li className="list-group-item">A second item</li>
              <li className="list-group-item">A third item</li>
              <li className="list-group-item">A fourth item</li>
              <li className="list-group-item">And a fifth one</li>
              <li className="list-group-item">An item</li>
              <li className="list-group-item">A second item</li>
              <li className="list-group-item">A third item</li>
              <li className="list-group-item">A fourth item</li>
              <li className="list-group-item">And a fifth one</li>
            </ul>
            </Col>
          </Row>
          
        </Form>
      </Container>
    </>
    
  )
}

export default CheckoutView