import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';





export default function NavBar() {
  return (
    <>
    
    <Navbar bg="light" expand="lg" >
    <Container >
    <NavLink to='/'>  <Navbar.Brand  className='fs-3 fw-bolder' >ASRStore</Navbar.Brand> </NavLink>
        
     <div className='sign'>

     
      <Button variant="outline-dark " className='sign-up px-3 mx-2 fs-6'>Sign-up</Button>
      <Button variant="outline-dark " className='sign-in px-3 mx-2 fs-6'>Sign-in</Button>
      
      </div>
      </Container>
  </Navbar>

  <nav className='categories-links'>
    <Container className='d-flex justify-content-around flex-wrap text-light text-center px-0'>
    
     <NavLink className='p-2 fw-bold text-light flex-fill fs-6' to='electronics'>Electronics</NavLink>
     <NavLink className='p-2 fw-bold text-light flex-fill fs-6' to='jewelery'>Jewelery</NavLink>
     {/* <NavLink className='p-2 fw-bold text-light flex-fill fs-6' to='clothes'>Clothes</NavLink> */}

    </Container>

  </nav>
  
  
     

</>

  )
}
