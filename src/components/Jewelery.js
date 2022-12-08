import React from 'react'
import { Container } from 'react-bootstrap'
import JewelerySwiper from './JewelerySwiper'
import TopSeller from './TopSeller'
import Footer from './Footer'

export default function Jewelery() {
  return (
    <section className='jewelery-section pt-1'>

      <Container className='g-0'>
    
         <JewelerySwiper />

         <TopSeller />
      </Container>

      <Footer />
         
    </section>
  )
}
