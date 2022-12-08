import React from 'react'
import data from "../TopSellerJewelery"
import {Row ,Col} from "react-bootstrap"
import {motion} from "framer-motion"
import {Link} from "react-router-dom"


export default function TopSeller() {

const [showwear , setShowWear] = React.useState(0)




  return (
    <section className='top-seller py-4 px-2'>
        <h2>Top Seller</h2>
        <Row className='g-1 py-2'>
            {data.map(item=>{
                return <Col lg={{ span: 4, offset: 0 }} xsm={6} sm={6} md={{ span: 6, offset: 0 }} key={item.id} className="text-center p-2 product d-flex flex-column align-items-center ">
                    <div className='img-container overflow-hidden' data-price={`$${item.price}`} onMouseEnter={()=>{setShowWear(item.id)}} onMouseLeave={()=>{setShowWear(-1)}} >
                    <Link to={"product/"+item.id} >
                      <motion.img
                       src={showwear === item.id ? item.img_second : item.fullImg }
                        className="img-fluid"
                         alt={item.title}
                         
                         animate={{opacity : 0.9}}
                         whileHover={{opacity :1}}
                       />
                       </Link>
                         </div>
                   <Link to={"product/"+item.id} > <h5 className='fs-5 py-2 product-title '>{item.title}</h5></Link>
                    <span style={{fontSize : "8px"}} className="m-start">{item.material[0].title}</span>
                   
                   
                </Col>
            })}

        </Row>

    </section>
  )
}
