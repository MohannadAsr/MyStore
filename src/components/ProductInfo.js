import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import {Row ,Col } from "react-bootstrap"
import splash from "../images/splash.png"
export default function ProductInfo({allProducts  ,addproduct , myCart  }) {

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

 


 function rating(rate) {

    const rated = []

    for(let i = 0 ; i < Math.floor(rate) ; i ++){
        rated.push(<i className="fa-solid fa-star" style={{color: "gold"}}></i>)
       
     }
     if(rate > rated.length ) { rated.push(<i className="fa-solid fa-star-half" style={{color: "gold"}}></i>)}
   
 return rated
 }


 function addremovebutton(){
  if(itemexist){
  return  <span className='fs-2 text-muted'>Item Already in your Cart</span>
  }
  else{
   return <Button variant="outline-dark" className='w-100' onClick={()=>{addproduct(theProduct)}}>Add to Cart</Button>
  }
 }

  return (
    <section className='product-info py-5'>
        <img src={splash} className="side-ad" alt="side-addition"></img>
        <Container>

    {theProduct ?  <Row>
    <Col lg={6} sm={6} className="product-img" style={{backgroundImage : `url(${theProduct.fullImg})`}} ></Col>
        <Col lg={6} className="px-4 py-4">
            <h3 style={{color:"#242b2f"}}><b>{theProduct.fullName}</b></h3>
            <span title={theProduct.rating}>{rating(theProduct.rating).map(item=> item)}</span>
            {theProduct.available ?   <>
            <div className='prices d-flex align-items-center  flex-wrap'>
            <h4>Price:</h4>
              <span className='real-price px-3'>
                ${Math.floor(theProduct.price)} 
              <span className='decimal real'> {theProduct.price.toString().split(".")[1]}¢ </span> 
              </span>
              <span className='after-price px-2'>
                <b>${Math.floor(theProduct.price - theProduct.sale)} 
              <span className='decimal'> {theProduct.price.toString().split(".")[1]}¢ </span> </b>
              </span>
     
              <span className='saved px-3 mx-3 m-start'>
                <b>${theProduct.sale} Sale </b></span>
              </div>
              <div className='availability py-3'>
                {theProduct.left <= 5 ? <span> <b> <span style={{color:"red"}}> Note : </span>  there is Only {theProduct.left} Items Left in the Stock - Order soon . </b></span> : <span className='bold fs-3' style={{color : "green"}}> <b>In Stock </b></span>}
              </div>
              </> :

              <div className='py-2'>
              <div className='fs-3' style={{color:"red"}}> <b>Currently unavailable. </b> </div>
              <div> <b>We don't know when or if this item will be back in stock. </b></div>
              </div>
              }
              <div className='about-product py-2'>
                
                <ul className='p-4 mb-0  '>
               
               {theProduct.details.map(item => {
                return <> <li key={item.title}><b >{item.title}:</b>      {item.info} </li>
                <hr/>
                </>
               })}

            </ul>
              </div>
              <div className='buy '>

                {theProduct.available ? 
                addremovebutton()
                :  
               null
                }
              
          </div>


         
    </Col>
</Row> : null}        

        </Container>
    </section>
  )
}
