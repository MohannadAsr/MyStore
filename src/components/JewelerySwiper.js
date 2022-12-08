import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "../styles/styles.css";

// import required modules
import { Navigation } from "swiper";

import data from "../TopSellerJewelery"

export default function JewelerySwiper() {


  const [topSeller] = React.useState(data)

  return (



    <>
    <Swiper 
    navigation={true}
     modules={[Navigation]}
     
      className="mySwiper">
      <SwiperSlide><img src="https://www.cartier.com/content/images/cms/ycm/resource/blob/380488/b53fb7c89a4d301c34a25e4cf932216a/picture-slide-3-data.jpg/w1920.jpg"/></SwiperSlide>
      <SwiperSlide><img src="https://www.cartier.com/content/images/cms/ycm/resource/blob/380586/1a273caeb7252ec199794adcefe38f71/picture-slide-1-data.jpg/w1920.jpg"/></SwiperSlide>
      <SwiperSlide><img src="https://www.cartier.com/content/images/cms/ycm/resource/blob/380464/01195e48334da93fc6f44c45fab07d93/picture-slide-2-data.jpg/w1920.jpg"/></SwiperSlide>
      
    </Swiper>
  </>
   


   


  
  )
}
