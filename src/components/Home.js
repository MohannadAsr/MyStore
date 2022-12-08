import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import {Row , Col , Button } from "react-bootstrap"
import cart from "../images/crt.png"
import {motion } from 'framer-motion'
import {Link} from "react-router-dom"


export default function Home() {
  return (

    <section className='home px-3 py-5 ' >
       <Container>
        <Row>
            <Col lg={7} className="  text-center pt-0 pt-lg-5 ">
                <div className='pt-0 pt-lg-5 w-70'>
            <h1 className='m-auto text-capitalize ' >We make it easy to live <br/> & zero waste life </h1>
       <p className='px-2 fw-bold text-muted'>Start Searching & shopping by selecting one of the categories Above</p>
     <Link to="discover" > <Button variant="outline-dark" className='px-5 py-2 my-3 fs-4  m-auto' >Start Discovering</Button> </Link> 
       </div>
            </Col>
            <Col lg={5}>
                <div style={{wdith: "100%" , zIndex : "5"}} className="py-2">
                <motion.div 
       animate={{y : [0 , 10 , 0] }}
       transition={{ repeat: Infinity, duration: 2  ,  type:"tween" , stiffness:120 }}
       >
            <img alt='cart' src={cart} className="img-fluid"></img>
            </motion.div>
            </div>
           

            </Col>
        </Row>

      
     



       </Container>
       
       
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='svg'>
  <path fill="#db4441" fillOpacity="1" d="M0,96L48,96C96,96,192,96,288,117.3C384,139,480,181,576,176C672,171,768,117,864,112C960,107,1056,149,1152,160C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
</svg>

    </section>
   

  )
}
