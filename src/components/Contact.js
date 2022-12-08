import React from 'react'
import { Container , Row , Col } from 'react-bootstrap'
import {motion} from "framer-motion"
import me from "../images/me.JPG"

export default function Contact({setShowContact}) {

    const wrapperRef = React.useRef(null);
    useOutsideAlerter(wrapperRef);

    function useOutsideAlerter(ref) {
        React.useEffect(() => {
          /**
           *Close if clicked on outside of element
           */
          function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setShowContact(false)
            }
          }
          // Bind the event listener
          document.addEventListener("mousedown", handleClickOutside);
          return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
          };
        }, [ref]);
      }

  return (
   <div className='overlay' out={()=>{setShowContact(false)}}>
    <Container>
    <motion.div 
    className='contact  px-4 py-4' 
    ref={wrapperRef}
    initial={{x: "-100vw"}}
    animate={{x: 0}}
    transition={{delay: 0.2 , duration : 1 , type: "spring" , stiffness : 50}}
    >
        <Row className='py-4'>
        <button type="button" class="btn-close" aria-label="Close" onClick={()=>{setShowContact(false)}} ></button>
            <Col lg={4} sm={12}>
                <img src={me}  className="img-fluid" style={{borderRadius :"10px"}} />
            </Col>
            <Col lg={8} className="px-4">
                <p className='fs-3 mt-4'>Mohannad Adnan Alassar</p>
                <hr/>
                <p><b className='list'>Qualification:</b> Telecomunication and Electrical Engineering - Front End [React JS] Developer</p>
                <p><b  className='list'>Country:</b> Syria</p>
                <p><b  className='list'>Address:</b> Syria - Aleppo</p>
                <p><b  className='list'>Birthday Date:</b> 1997 / 9 / 4</p>
                <div className='text-center fw-bold mt-5 fs-5'>
                        Contact Me & Follow Me on these Platforms 
                    </div>
                <div className='d-flex justify-content-center gap-4 mt-2 text-dark social-contact'>

            <a href='https://www.facebook.com/mohannad.ala2sar' ><i className="fa-brands fa-facebook fa-2x facebook"></i></a>
            <a href='https://api.whatsapp.com/send/?phone=963964539647'  ><i className="fa-brands fa-whatsapp fa-2x whatsapp"></i></a>
            <a href='https://github.com/MohannadAsr' data-aos="flip-right"  ><i className="fa-brands fa-github fa-2x github"></i></a>

            </div>

            </Col>
        </Row>
        
    </motion.div>
    </Container>
   </div>
  )
}
