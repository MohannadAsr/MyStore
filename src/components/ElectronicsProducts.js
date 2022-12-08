import React from 'react'
import data from "../ElectronicsProducts"
import {Row , Col, Container , Button } from "react-bootstrap"
import {motion , AnimatePresence} from 'framer-motion'
import {Link} from "react-router-dom"

export default function ElectronicsProducts() {

 const [filteredProducts , setFilteredProducts] = React.useState([])
 const [filter , setFilter] = React.useState(9)
 const [visible,setVisible] = React.useState(3)
 const gaming = [0,1,4,5,3]
 const household = [6,7,8]


 //Setting the Filter 

 React.useEffect(()=>{
    if ( filter === 9 ) {
        setFilteredProducts(data)
        return;
    }
    const filtering = data.filter(item => {
      return  item.categories.includes(filter)
    })
   setFilteredProducts(filtering)
   
 },[filter])




 // Converting Rating to A stars

 function rating(rate) {

    const rated = []

    for(let i = 0 ; i < Math.floor(rate) ; i ++){
        rated.push(<i className="fa-solid fa-star" key={Math.random()} style={{color: "gold"}}></i>)
       
     }
     if(rate > rated.length ) { rated.push(<i className="fa-solid fa-star-half" style={{color: "gold"}}></i>)}
   
 return rated
 }

 function showall(count) {
    setVisible(count)
 }


  return (
    <section className='electronics-products py-3 '>
        <Container>
          <div className="filtering-buttons mb-5">
          <Button variant={"outline-dark"} className={filter === 9 ? "btn mx-2 active" : "btn mx-2"}  onClick={()=>{setFilter(9)}}>All</Button>
          <Button variant={"outline-dark"} className={gaming.includes(filter) ? "btn mx-2 active" : "btn mx-2"}  onClick={()=>{setFilter(5)}}>Gaming</Button>
          <Button variant={"outline-dark"} className={household.includes(filter) ? "btn mx-2 active" : "btn mx-2"} onClick={()=>{setFilter(8)}}>Household Items</Button>
          </div>
          {gaming.includes(filter) ? <motion.div
           className="filtering-buttons-extra  d-flex justify-content-lg-center justify-content-sm-start flex-wrap g-3"
           layout
            initial={{opacity : 0 , x : -150}}
            animate={{opacity:1  , x: 0}}
            exit={{opacity:0 , x : 150 }}
            transition={{duration: 2 , type:"spring" , stiffness:20}}

           >
          <Button variant={"outline-dark"} className={filter === 0 ? "btn mx-2 active mb-2" : "btn mx-2 mb-2"}  onClick={()=>{setFilter(0)}}>Headsets</Button>
          <Button variant={"outline-dark"} className={filter === 3 ? "btn mx-2 active mb-2" : "btn mx-2 mb-2"} onClick={()=>{setFilter(3)}}>Mouses</Button>
          <Button variant={"outline-dark"} className={filter === 1 ? "btn mx-2 active mb-2" : "btn mx-2 mb-2"} onClick={()=>{setFilter(1)}}>Keyboards</Button>
          <Button variant={"outline-dark"} className={filter === 4 ? "btn mx-2 active mb-2" : "btn mx-2 mb-2"} onClick={()=>{setFilter(4)}}>Chairs</Button>
          </motion.div> : ""}
          {household.includes(filter) ? <motion.div 
          className="filtering-buttons-extra d-flex justify-content-center flex-wrap g-3"
          layout
            initial={{opacity : 0 , x : -150}}
            animate={{opacity:1  , x: 0}}
            exit={{opacity:0 , x : 150 }}
            transition={{duration: 2 , type:"spring" , stiffness:20}}

          >
          <Button variant={"outline-dark"} className={filter === 6 ? "btn mx-2 active" : "btn mx-2 "}  onClick={()=>{setFilter(6)}}>Vaccums</Button>
          <Button variant={"outline-dark"} className={filter === 7 ? "btn mx-2 active" : "btn mx-2"} onClick={()=>{setFilter(7)}}>HealthCare items</Button>
          </motion.div> : ""}
          <hr />
          
        <Row>
        <AnimatePresence>
            {filteredProducts.slice(0,visible).map(item => {
                return <Col lg={4} md={6}   key={item.id} className="g-4 text-center">
                  <motion.div 
                  layout
                  initial={{opacity : 0}}
                  animate={{opacity:1}}
                  exit={{opacity:0}}
                  transition={{duration: 1 , type:"spring" , stiffness:30}}
                  >
                  <Link to={"product/"+item.id}>  <div className='product-img mb-3 m-auto' style={{ backgroundImage :`url(${item.img})`}}></div></Link>
                  <Link to={"product/"+item.id} className="text-dark">  <h5>{item.title}</h5></Link>
                    <span title={item.rating}>{rating(item.rating).map(item=> item)} <b> {item.raters} Ratings </b> </span>
                    <div className='availability'>
                    {item.available ? 
                     <>
                     <div > <b className='text-muted'>{item.left <= 5 ? `Only  ${item.left}  Items Left ` : ""}</b></div>
                     
                     </>
                      : <div > <b style={{color : "red"}}>{item.left === 0 ? `Out of the Stock` : ""}</b></div> }
                      </div>
                    
                    <hr/>
                    </motion.div>
                </Col>
            })}
   </AnimatePresence>
        </Row>
     
         {visible === filteredProducts.length ? "" : <div className='d-flex justify-content-center align-items-center'>
        <Button variant={"outline-dark"} className="btn" onClick={()=>{showall(filteredProducts.length)}}>Show All</Button>
        </div> }

        {(visible === filteredProducts.length && visible >= 4)   ? <div className='d-flex justify-content-center align-items-center'>
        <Button variant={"outline-dark"} className="btn" onClick={()=>{showall(3)}}>Show Less</Button>
        </div> : "" }


        
        </Container>

    </section>
  )
}
