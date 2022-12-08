import React from 'react'
import cart from "../images/crt.png"
import {Link} from "react-router-dom"
import {motion , AnimatePresence} from "framer-motion"

export default function MyCart({myCart}) {
  return (
 <>
 <AnimatePresence>
 {myCart ? <Link to="/mycart"> <motion.div 
 className='my-cart'
 initial={{x :-50}}
 animate={{x : 0 , opacity : 0.9}}
 whileHover={{scale : 1.2 , opacity : 1}}
 transition={{  type : 'spring' , stiffness : 300}}
 >
  <img src={cart} className="img-fluid" alt='myCart'/> 
   <span className='counter'>{myCart.length}</span>
</motion.div> </Link>: null }
</AnimatePresence>
</>
    
  )
}
