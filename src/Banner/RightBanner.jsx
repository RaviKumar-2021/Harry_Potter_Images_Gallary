import React,{useEffect,useState} from 'react'
import './LeftRightBanner.css'



function RightBanner() {

  const [House, setHouse] = useState([])  
  useEffect(() => {
      fetch('http://hp-api.herokuapp.com/api/characters/staff')
      .then(response => response.json())
      .then(data => setHouse(data));
      
     }, [])
    
  return (
    <div className='RightBanner'>
      {
        House.slice(4,10).map(RightBannerSideBar=>{
          return(
            <>
            <img src={RightBannerSideBar.image} alt="" srcset="" />
            </>
          )
        })
      }
     
    </div>
  )
}

export default RightBanner