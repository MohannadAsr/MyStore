import React from 'react'
import { Container } from 'react-bootstrap'
import {Col , Row } from "react-bootstrap"
import Footer from './Footer';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import logo from "../images/landing.png"
import splash from "../images/splashbkg.png"
import gif from "../images/sale.gif"
import gif1 from "../images/sale2.gif"
import data from "../Discount"
import cart from "../images/shop.png"
import elc from "../images/elc.jpg"
import jew from "../images/jew.jpg"
import vendor1 from "../images/vendor/vendor-1.jpg"
import vendor2 from "../images/vendor/vendor-2.jpg"
import vendor3 from "../images/vendor/vendor-3.jpg"
import vendor4 from "../images/vendor/vendor-4.jpg"
import vendor5 from "../images/vendor/vendor-5.jpg"
import vendor6 from "../images/vendor/vendor-6.jpg"




export default function Discover({search , searchres}) {

 const [discount , setDiscount] = React.useState(data)

  return (
    <section className='discover-section'>
        <Container >
            <Row className='py-3 landing'>
                <Col lg={5} className="d-flex align-items-center">
                    <div>
                    <h1 className='mt-lg-5 mt-sm-4 mb-3 discover-title' style={{fontFamily : 'Roboto' , fontSize : "50px" , color : "#2b3537"}}><span className='text-light'>ONLINE <img src={splash} className="design img-fluid" alt='design' /></span> SHOPPING</h1>
                    <p className='fs-5 px-2 fw-bold' >Discover Products for a life well lived.Using our store has now become easier and safer, and we are always working to provide more unique and exclusive products only on our website</p>
                    </div>
                </Col>
                <Col lg={7} className="py-4" >
                    <img src={logo} className="img-fluid" />
                  
                </Col>
            </Row>
            <hr/>
            </Container>

            <section className='browse py-4 '>
                <Container>
                    <h1 className='mb-4 special-heading'>Browse categories</h1>
                    <Row className=' py-4 mb-3 '>
                        <Col lg={{ span: 3, offset: 2 }} sm={{ span: 6 }} className="cat-container "><img src={elc} className="img-fluid cat" /><span className='overlay elc'><a href='/electronics'>Electronics</a></span></Col>
                        <Col lg={{ span: 3, offset: 2 }} sm={{ span: 6 }} className="cat-container "><img src={jew} className="img-fluid cat" /><span className='overlay jew'><a href="/jewelery">Jewelery</a></span></Col>
                    </Row>
                    
                <hr/>
                </Container>
            </section>
            



            <section className='search text-center py-5' style={{backgroundColor : "#fcfcfc"}}>
                
                <Container  >
                <span className='moving-cart'><img src={cart} className="img-fluid"/></span>
                <h1  style={{color : "#242b2f"}}>Are You Looking for Something?</h1>
                <h3 style={{color : "#e23e22"}} >Search for products Now</h3>
               
                <InputGroup className="mb-5 my-4 w-75 m-auto product-search" onFocus={(e)=>{search(e.target.value)}} onChange={(e)=>{search(e.target.value)}}>
        <Form.Control
          placeholder="Search for Products"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
       
      </InputGroup>
      <Row className='search-result my-4 py-3'>
        {searchres && searchres[0] === "x" ? <Col> <h3 className='text-muted text-center'>Sorry , No match for Your Search</h3> </Col>: null}
        {searchres && searchres[0] === "y" ? <Col> <h5 className='text-muted text-center'> Please Be More Specific </h5> </Col>: null}
        <Col lg={12} className="d-flex flex-wrap justify-content-center">
        {searchres && searchres[0] !== "x" & searchres[0] !== "y" ? searchres.map(item=>{
            return <div className='search-product d-flex flex-column mx-lg-3 mx-sm-0  my-2 align-items-center p-2'>
                {item.categories.includes(9) && <a  href={`/electronics/product/${item.id}`}> <div style={{backgroundImage : `url(${item.img})` , height : "300px"}} className="search-product-img"></div> </a> }
                {item.categories.includes(50) && <a href={`/jewelery/product/${item.id}`}> <div style={{backgroundImage : `url(${item.img})` , height : "300px"}} className="search-product-img"></div> </a> }
                <span className='fw-bold' style={{maxWidth :"300px"}}>{item.title}</span>
                {item.categories.includes(9) && <span  className='px-2 my-3  electronic-cat'>Electronics</span>}
                {item.categories.includes(50) && <span className='px-2 my-3  jewelery-cat'>Jewelery</span>}
                </div>
        }) :null }
       </Col>
      </Row>


                </Container>
            </section>


 {/* Discount  */}


            <section style={{backgroundColor : "#000"}} className="text-center">
            <Container>
            <Row  className="py-2 g-0"  >
               
                <Col lg={2}  md={6} >
                <img src={gif1} className="img-fluid " alt="hallowen" style={{height : "100%"}} />
                </Col>
                <Col lg={2}  md={6} >
                <img src={gif} className="img-fluid mx-lg-2 mx-0" alt="hallowen" style={{height : "100%"}} />
                </Col>
                
                <Col lg={8}  md={12}  className=" py-3 text-start px-lg-4 px-0 d-flex align-items-center ">
                    <div>
                    <h2 className='text-light fw-bolder'>Get Your Discount Now</h2>
                    <p className='text-light'>Hallowen Is Coming Get your Discount now before Time Run out .</p>
                    <div className='d-flex p-2 gap-lg-3 gap-5 flex-wrap'>
                       
                       {discount && discount.slice(4,8).map(item => {
                        return  <a href={`electronics/product/${item.id}`}><div className='discounted-product' style={{backgroundImage :`url(${item.fullImg})` }}><span className='sale'>${item.sale}</span></div></a>
                       })}
                    </div>
                    </div>
                </Col>
            </Row>
            </Container>
            </section>

            <section className='vendors py-4'>
            <Container>
                <Row className='g-0 text-center'>
                    <Col><img src={vendor1} className="img-fluid" /></Col>
                    <Col><img src={vendor2} className="img-fluid" /></Col>
                    <Col><img src={vendor3} className="img-fluid" /></Col>
                    <Col><img src={vendor4} className="img-fluid" /></Col>
                    <Col><img src={vendor5} className="img-fluid" /></Col>
                    <Col><img src={vendor6} className="img-fluid" /></Col>
                </Row>
             </Container>
                 
            </section>
<Footer />
           
       
    </section>
  )
}
