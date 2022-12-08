import React from 'react'
import TrendingElectronics from './TrendingElectronics'
import ElectronicsProducts from './ElectronicsProducts'
import Footer from './Footer'

export default function Electronics() {
  return (
    <section className='electronics-section'>
     <TrendingElectronics />
     <ElectronicsProducts />
     <Footer />
     
    </section>
  )
}
