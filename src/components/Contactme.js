import React from 'react'
import {motion} from "framer-motion"
import Popover from "react-bootstrap/Popover"
import OverlayTrigger from "react-bootstrap/OverlayTrigger"

export default function Contactme({setShowContact}) {

    const popoverHoverFocus = (
        <Popover id="popover-trigger-hover-focus" title="Popover bottom" className='p-2 text-center fw-bold' style={{zIndex : "999999999"}}>
          Contact Me
        </Popover>
      );
  
      
  return (

<OverlayTrigger 
                          trigger={['hover', 'focus']}
                          placement="right"
                          overlay={popoverHoverFocus}>
                                  <motion.div 
    className='contact-me'
     initial={{x :-50}}
 animate={{x : 0 , opacity : 0.9}}
 whileHover={{scale : 1.2 , opacity : 1}}
 transition={{  type : 'spring' , stiffness : 300}}
 onClick={()=>{setShowContact(true)}}
     >
        <i class="fa-solid fa-address-card"></i>
    </motion.div>
                          </OverlayTrigger>


    
  )
}
