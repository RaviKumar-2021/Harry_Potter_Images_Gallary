import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect, useState } from 'react';

function FanFavorites() {
  const fanImg={
    width: 'auto',
    margin:'5px',
    marginLeft:'10px',
    height: '300px',
  }
    const FanFavReasponsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
      const ffs={
          textAlign:'center',
      }
      const [fanList, setfanList] = React.useState([])

      useEffect(() => {
       fetch('http://hp-api.herokuapp.com/api/characters')
       .then(response => response.json())
       .then(data => setfanList(data));
       
      }, [])
     
  return (
    <div className='bg-black'>
        <h1 className='text-yellow-600 text-4xl p-10 font-black '>| Fan Favorites | <br />
        <p className='text-yellow-600 text-xl'>This week's top TV and movies</p>
        
         </h1>

<Carousel responsive={FanFavReasponsive} >
{
  fanList.map(fan=>{
    return(
      <>
     <img src={fan.image} alt="" srcset="" style={fanImg}/>
      </>
    )
  })
}
</Carousel>;
</div>
  )
      
}

export default FanFavorites