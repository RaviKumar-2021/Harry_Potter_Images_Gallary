import React from 'react'
import './MoviesList.css'
import {useEffect, useState} from 'react'


  

function MoviesList(props) {
    const [MoviesList, setMoviesList] = useState([])
    const [Pagination, setPagination] = useState(1)
   
   

 useEffect(() => {
  fetch('http://hp-api.herokuapp.com/api/characters/students')
  .then(response => response.json())
  .then(data => setMoviesList(data));
  
 }, [props.Pagination])
 const nextPage=()=>{
   setPagination(
     Pagination+1
   )
 }
 const backPage=()=>{
 
    if(Pagination>1){
      setPagination(Pagination-1)
  }
 
}

var startPage=0
var endPage=8
startPage=Pagination*endPage
endPage=startPage-endPage
console.log(MoviesList)

  return (
      <>
      <div className=' bg-black text-yellow-600 text-4xl p-10 font-black '>| Hogwarts | <br />
        <p className='text-yellow-600 text-xl'>Studens and more members</p>
         </div>
      <div className='moviesList flex-wrap bg-black'>
      
      {MoviesList.slice(endPage,startPage).map(hp=>{
        return(
        <>
        
        <div className='Align-center '>
        <img src={hp.image} alt="Avatar" className='MoviesListIMG'/>
        <h3><p className='text-yellow-600'>Movies Name: {hp.name}</p></h3>
        <p><b className='text-yellow-600'>Real Name: {hp.actor}</b></p>
       
       <div>
       </div>
       </div>
       
    
        </>)
      })}
  </div>
 

    
    <div className='items-center flex justify-between p-10 text-center bg-black-600 flex-container bg-black'>
    <div><button onClick={backPage} className='bg-yellow-600 pt-3 pb-3 pl-5 pr-5 text-2xl'>Back</button></div>
<div><button onClick={nextPage} className='bg-yellow-600 pt-3 pb-3 pl-5 pr-5 text-2xl'>Next</button></div>
    </div>
  
</>
  )
}

export default MoviesList