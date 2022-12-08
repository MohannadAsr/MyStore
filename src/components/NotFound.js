import React from 'react'
import { Container , Button } from 'react-bootstrap'
import {Link} from "react-router-dom"

export default function NotFound() {
  return (
    
        <Container>
            <section className='not-found' style={{height : "calc(100vh - 100px)" }}> <Link to="/"> <Button variant='outline-dark' className='d-block  mx-auto my-4'>Go Home</Button> </Link></section> 
           
        </Container>
   
  )
}
