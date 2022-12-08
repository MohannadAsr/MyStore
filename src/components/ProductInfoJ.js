import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import {Row ,Col } from "react-bootstrap"
import MediaQuery from 'react-responsive'
import { Swiper, SwiperSlide } from "swiper/react";
import Accordion from 'react-bootstrap/Accordion';


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../styles/styles.css";

// import required modules
import { Pagination } from "swiper";

export default function ProductInfoJ({allProducts  ,addproduct , myCart  }) {


    const params = useParams()
    const myid = params.productID
    const [theProduct , setThePorduct] = React.useState()
    const [itemexist , setItemexist] = React.useState(false)
   
   
   
   React.useEffect(()=>{
   
   
   myCart.forEach(item =>{
     if(item.id === myid){
       setItemexist(true)
       return
     }
   })
   
   },[myCart,myid])
   
   
   
   
    React.useEffect(()=>{
   
       if(allProducts) {
   
      
   
       allProducts.map(item=>{
           if(item.id === myid) {setThePorduct(item)}
           return null
       })
   }
   
    },[allProducts,myid])
   
    
   console.log(theProduct)
   
    function rating(rate) {
   
       const rated = []
   
       for(let i = 0 ; i < Math.floor(rate) ; i ++){
           rated.push(<i className="fa-solid fa-star" style={{color: "black"}}></i>)
          
        }
        if(rate > rated.length ) { rated.push(<i className="fa-solid fa-star-half" style={{color: "black"}}></i>)}
      
    return rated
    }
   
   
    function addremovebutton(){
     if(itemexist){
     return  <span className='fs-5 text-muted'>Item Already in your Cart</span>
     }
     else{
      return <Button variant="outline-dark" className='w-100' onClick={()=>{addproduct(theProduct)}}>Add to Cart</Button>
     }
    }



  return (
    <section className='product-info-jewelrey py-5'>

<Container className='g-0'>
    <Row>
    {theProduct ? 
    <>
<MediaQuery minWidth={200}>

<MediaQuery maxWidth={999}>
<Col sm={12} > 
<>
    <Swiper 
     pagination={true}
     modules={[Pagination]}
     className="mySwiper">

{theProduct.imgs_list.map(item=>{
            return <SwiperSlide><img src={item} className="img-fluid" /></SwiperSlide>
        })}
        
        
        
      </Swiper>
    </>
</Col>
</MediaQuery>


<MediaQuery minWidth={1000}>
<Col lg={6}>
    <Row className='g-1'>
        {theProduct.imgs_list.map(item=>{
            return <Col lg={6}> <img src={item} className="img-fluid" /></Col>
        })}
    
    
    </Row>
</Col>
</MediaQuery>

</MediaQuery>


<Col lg={6} sm={12} className="py-2 px-5 text-center">
    <h3 className='title py-3'>{theProduct.title} - ${theProduct.price}</h3>
    <span className='py-4 '>{rating(theProduct.rating).map(item=>{
        return item
    })} - <span className='fw-bold'> {theProduct.rating} </span> -   {theProduct.raters} Total Ratings</span>
    <div className='availability py-2 '>
        {theProduct.available ? <> <i class="fa-solid fa-check"></i> <span>  in Stock </span>
        <div>{addremovebutton()}</div>
        {theProduct.categories.includes(51) ?  <>
        <div className='py-2'>Available Sizes</div>
        <div><ul className='sizes d-flex justify-content-center gap-3'>{theProduct.sizing_Available.map(item=>{
            return <li className='product-size'>{item}</li>
        })}</ul></div>
        <div style={{fontSize:"11px"}} >You Can Choose The Size After Adding the Product to Your Cart</div>
        </> 
        : null }
        </> 
        : 
        <><div>
            <span className='d-block text-muted'><i class="fa-solid fa-xmark"></i> Out of The Stock</span>
            <span className='text-muted d-block' style={{fontSize :"12px"}}> Sorry This Product Out of the Stock Now </span>
        </div></>}
    </div>
    <hr/>
    <div className='services  px-5'>
        <ul className='d-flex flex-column gap-2' style={{color: "#333"}}>
            <li><i class="fa-solid fa-truck-fast"></i> Free Shipping on orders over $150</li>
            <li><i class="fa-solid fa-box"></i> Free 30 Day Returns.</li>
            <li><i class="fa-solid fa-shield"></i> 2 Year Warranty</li>
        </ul>
    </div>
    <hr/>
    <div className='product-details'>
    <Accordion defaultActiveKey="1">
      <Accordion.Item eventKey="0">
        <Accordion.Header className='fw-bolder'>DESCRIPTION & DETAILS</Accordion.Header>
        <Accordion.Body style={{fontSize : "12px"}}>
            <div className='text-start'>
          {theProduct.description_title}
          </div>
          <hr/>
          <div>
            {theProduct.description_info.map(item=>{
                return <span className='text-start d-block'>- {item}</span>
            })}
          </div>
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
      <hr/>
      <div className='materials py-2'>
        <h4 className='py-2'>Materials</h4>
      <ul>
        {theProduct.material.map(item=>{
            return <li style={{fontSize : "14px"}}>- <span className='fw-bold '>{item.title}</span>:<span> {item.info}</span></li>
        })}
      </ul>
        
      </div>
      

    </div>
</Col>

</>




        
        

   
   : null }

    </Row>
</Container>

      </section>
  )
}
