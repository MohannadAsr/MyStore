import React from 'react'
import { Container , Row , Col , Button } from 'react-bootstrap'
import {Link} from "react-router-dom"


export default function Cart({myCart , removeproduct , editcount , alert , editsize}) {


const [TotallPrice , SetTotallPrice] = React.useState(null)


React.useEffect(()=>{

let i = 0

myCart.forEach(element => {
    element.sale ? 
    i = i + (element.price - element.sale)* element.count : i = i + (element.price * element.count)

});

SetTotallPrice(i.toFixed(2))

},[myCart])



  return (
    <section className='cart py-5'>
        <Container className='text-center' >
            <h1 className='bolder m-auto mb-3'>My Cart</h1>
            
            {myCart && myCart.length ? myCart.map(item=>{
                return <><Row key={item.id}>
                    <Col lg={3} sm={12} className="py-1 g-5">
                        <div className='d-flex flex-column align-items-center my-2'>
                            {item.categories.includes(50) && <><Link to={`/jewelery/product/${item.id}`}> <div className='product-img text-center ' style={{backgroundImage :`url(${item.img})`}}></div></Link>
                           <Link to={`/jewelery/product/${item.id}`}>  <span className='fw-bold text-dark'>{item.title}</span> </Link></>}
                           {item.categories.includes(9) && <><Link to={`/electronics/product/${item.id}`}> <div className='product-img text-center ' style={{backgroundImage :`url(${item.img})`}}></div></Link>
                           <Link to={`/electronics/product/${item.id}`}>  <span className='fw-bold text-dark'>{item.title}</span> </Link></>}
                        </div>
                    </Col>
                    <Col lg={4} sm={12} md={12} className="d-flex flex-column justify-content-center align-items-center my-2">
                        <div className='d-flex justify-content-center align-items-center'>
                        <i className="fa-solid fa-plus increment" onClick={()=>{editcount(item.id , +1) }}></i>
                    <input placeholder={`${item.count}`} className='text-center mx-2' disabled    />
                    <i className="fa-solid fa-minus decrement" onClick={()=>{editcount(item.id , -1) }}></i>
                        </div>
                   {item.categories.includes(51) && <div className='pt-4'> <div className='fw-bold m-end'>Choose The Size</div> <ul className='d-flex gap-4 pt-1 flex-wrap text-center'>{item.sizing_Available.map(items=>{
                        return <li className={item.size === items ? "product-size active" : 'product-size'} onClick={()=>{editsize(item.id , items)}}>{items}</li>
                    })}</ul> </div> }
                    
                    </Col>
                    <Col lg={2} sm={6} xsm={6} md={6} className="d-flex flex-column align-items-center justify-content-center my-2 ">
                        <h6>Unit Price</h6>
                        <span className='fw-bold my-2 fs-6' style={{color : "red"}}>{item.sale ? <span>${(item.price - item.sale).toFixed(2)}</span> : <span>${(item.price).toFixed(2)}</span>}</span>
                    </Col>
                    <Col lg={2} sm={6} xsm={6} md={6} className="d-flex flex-column align-items-center justify-content-center my-2">
                      <h6>Total Price</h6>
                      <span className='fw-bold my-2 fs-6' style={{color : "red"}}>{item.sale ? <span>${((item.price - item.sale).toFixed(2) * item.count).toFixed(2) }</span> : <span>${((item.price).toFixed(2) * item.count).toFixed(2)}</span> } </span> 

                    </Col>
                    <Col lg={1} sm={12} md={12} className="d-flex flex-column align-items-center justify-content-center my-2">
                    <i className={alert[0] === 0 && item.id === alert[1] ? "fa-solid fa-trash-can fa-2x remove attention" : "fa-solid fa-trash-can fa-2x remove " } style={{color : "red"}} onClick={()=>{removeproduct(item.id)}}></i>
                    </Col>
                    
                   
                    
                   {alert[0] === 0 && item.id === alert[1] ?  <Col lg={12}><span className='fw-bold'><span style={{color : "red"}}>Note:</span> Delete Product By Clicking the Trash Button</span></Col> : null}
                   {alert[0] === 10  && item.id === alert[1] ?  <Col lg={12}><span className='fw-bold'><span style={{color : "red"}}>Note:</span> There is Only {item.left} Left</span></Col> : null} 
                </Row>
                <hr/>
                </>
                
            }) : <p className='text-muted py-5 fs-1' >Nothing In Your Cart</p> }

            {myCart && myCart.length > 0 ? <Row>
                <Col lg={12} className="fs-6 fw-bold py-3">Total Price : <span style={{color : "red"}} > ${TotallPrice} </span></Col>
                <Col lg={12}> <Button variant='outline-dark px-5 mb-5'>Proceed To Checkout</Button></Col>
                <hr/>
                <div style={{width : "200px"}} className="m-auto">
                <img src="https://help.zazzle.com/hc/article_attachments/360010513393/Logos-01.png" className='img-fluid' alt="payment-methods" />
                </div>
            </Row> : null}
            
            
        </Container>
    </section>
  )
}
