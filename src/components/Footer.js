import React from 'react'
import {Row , Col , Container , Form , Button , InputGroup } from "react-bootstrap"


export default function Footer() {
  return (
    <section className='footer py-4'  >
                <Container>
                <Row className='g-0 '>
                    <Col lg={3} className="p-4 ">
                        <h5 className='text-light'>GET IN TOUCH</h5>
                        <p className='text-light py-4'>No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et et dolor sed dolor. Rebum tempor no vero est magna amet no</p>
                        <div className='text-light px-1'>
                        <div><i className="fa-solid fa-location-dot px-2"></i>123 Street, New York,USA</div>
                        <div><i className="fa-solid fa-envelope  px-2"></i>mail@domain.com</div>
                        <div><i className="fa-solid fa-phone px-2"></i>+012 345 67890</div>
                        </div>

                    </Col>
                    <Col lg={3} className="p-4 text-light">
                        <h5 className='text-light'>QUICK SHOP</h5>
                        <ul className='py-4 '>
                            <li className='py-2' ><a href='/discover'><i className="fa-solid fa-angle-right px-2"></i>Jewelery</a></li>
                            <li className='py-2' ><i className="fa-solid fa-angle-right px-2"></i>Electronics</li>
                        </ul>

                    </Col>
                    <Col lg={3} className="p-4 ">
                        <h5 className='text-light'>MY ACCOUNT</h5>
                        <ul className='py-4 text-light'>
                            <li className='py-2' ><i className="fa-solid fa-angle-right px-2"></i>Home</li>
                            <li className='py-2' ><i className="fa-solid fa-angle-right px-2"></i>Discover</li>
                            <li className='py-2' ><i className="fa-solid fa-angle-right px-2"></i>Electronics</li>
                            <li className='py-2' ><i className="fa-solid fa-angle-right px-2"></i>Electronics</li>
                        </ul>

                    </Col>
                    <Col lg={3} className="p-4 text-light">
                        <h5 className='text-light'>NEWSLETTER</h5>
                        <div className='py-4'>
                            <p>Duo stet tempor ipsum sit amet magna ipsum tempor est</p>
                             
                <InputGroup >
        <Form.Control
          placeholder="Enter Your E-mail"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          style={{border : "none"}}
        />
        <Button  id="button-addon1" className='px-3 subscribe-btn'>
          Subscribe
        </Button>
       
      </InputGroup>

      <h6 className='py-3 fw-bold'>FOLLOW US</h6>
      
      <div className='d-flex justify-content-center align-items-center text-light gap-4'>
      <span className='social-container'>
      <i class="fa-brands fa-facebook-f"></i>
      </span>
      <span className='social-container'>
      <i class="fa-brands fa-twitter"></i>
      </span>
      <span className='social-container'>
      <i class="fa-brands fa-instagram"></i>
      </span>
      </div>
      <div>

      </div>
                        </div>

                        
                    </Col>
                    <Col lg={12} >
                    <div style={{width : "200px" , backgroundColor : "#fcfcfc" , borderRadius : "20px"}} className="m-auto px-2">
                <img src="https://help.zazzle.com/hc/article_attachments/360010513393/Logos-01.png" className='img-fluid' alt="payment-methods" />
                </div></Col>
                </Row>
                <hr className='text-light'/>
                <div className='text-muted text-center'>
                    <div>
                © 2005-2022 ASRStore. All rights reserved.
                </div>
                <div className='text-light'>
                    Designed And Created By Mohannad Adnan Alassar 
                </div>
                </div>
                </Container>
            </section>
           
           
  )
}
