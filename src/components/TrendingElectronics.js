import React from 'react'
import {Row, Col, Container} from 'react-bootstrap'
import data from "../trendingElectronics"

export default function TrendingElectronics() {

    const [trendData ] = React.useState (data)
    const [selectedTrend , setSelectedTrend] = React.useState(data[0])
    const [rating , setRating ] = React.useState([0,0])


    React.useEffect(()=>{

        

            const rated = []
            
            for(let i = 0 ; i < Math.floor(selectedTrend.rating) ; i ++){
               rated.push(<i className="fa-solid fa-star" style={{color: "gold"}}></i>)
              
            }
            if(selectedTrend.rating > rated.length ) { rated.push(<i className="fa-solid fa-star-half" style={{color: "gold"}}></i>)}
            setRating(rated)
       

    },[selectedTrend])


 function selecteTrend(id) {
    trendData.map(item=> {

       if(item.id === id) {
        setSelectedTrend(item)
       
       }
 return 0
        

    })
 }
  
    const gallery =  trendData.map(item => {
        return <span key={item.id} className={item.id === selectedTrend.id ? "gallery active" : "gallery"} style={{backgroundImage : `url(${item.img})`}} onMouseEnter={()=>selecteTrend(item.id)}></span>
    })


    



  return (
    <Container className='py-5'>
    <Row>
        <Col lg={12} sm={12} md={12} className="d-flex  justify-content-center align-items-center gap-lg-5 gap-3">
            {gallery}
        </Col>
        <Col lg={6} sm={12} md={12} className="text-center py-5">
          <img src={selectedTrend.img} className="img-fluid" alt={selectedTrend.id}></img>
        </Col>
        <Col lg={6} sm={12} className="px-2 py-2 py-lg-5 d-flex flex-column">
            <h4>{selectedTrend.title}</h4>
            <hr/>
           
            <div>
            {rating.map(item=> {
                return <span key={Math.random()}  title={selectedTrend.rating}>{ item }</span> 
            })}
            <span>-<b> {selectedTrend.raters} Ratings </b></span>
            <hr/>
            <ul>
               {selectedTrend.details.map(item => {
                return <li key={item.title}><b>{item.title}:</b> {item.info} </li>
               })}
            </ul>

            </div>

        </Col>
    </Row>
   <hr/>
    </Container>
  )
}
