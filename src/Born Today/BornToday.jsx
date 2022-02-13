import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {useEffect,useState} from 'react'

function BornToday() {
const [Teachers, setTeachers] = useState([])



  useEffect(() => {
    fetch('http://hp-api.herokuapp.com/api/characters/staff')
    .then(response => response.json())
    .then(data => setTeachers(data));
    
   }, [])
    
        const FanFavReasponsive = {
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 4,
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
          const Teacher={
              textAlign:'center',
              width:'250px',
              height:'250px',
              borderRadius:'50%',

          }

  return (
    
    <div className='bg-black'>
        <h1 className='text-yellow-600 text-4xl p-10 font-black '>| Hogwarts | <br />
        <p className='text-yellow-600 text-xl'>Teachers and staff members</p>
         </h1>
         <div className='space-x-10 flex-wrap'>       
<Carousel responsive={FanFavReasponsive} >
  
    {
      Teachers.map(Techer=>{
        return(
          <>
          <img src={Techer.image} alt="" srcset="" className='rounded-full' style={Teacher}/>
         <p className='text-yellow-600 ml-10 text-2xl p-3 b-r-10'>{Techer.name}</p>
          </>
        )
      })
    }
    
  

  
</Carousel>;
</div>
</div>
  )
}

export default BornToday