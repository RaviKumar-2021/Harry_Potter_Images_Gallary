import React, {useEffect, useState} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Banner1 from '../Images/Banner1.jpg';
import Banner2 from '../Images/Banner2.jpg';
import './LeftRightBanner.css'





const LeftBanner=()=> {
   
        return (
<>
<div className='LeftBanner'>
            <Carousel>
            <img src={Banner1} alt="" srcset="" />
            <img src={Banner2} alt="" srcset="" />
            <img src={Banner1} alt="" srcset="" />
            <img src={Banner2} alt="" srcset="" />
            </Carousel>
</div>
</>
        )
 }

 
 export default LeftBanner