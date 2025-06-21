import React, { useEffect } from 'react'
import './TitleCards.css'
import { useRef } from 'react';
import cards_data from '../../assets/cards/cards_data.js';


const TitleCards = () => {

const cardsRef = useRef();

const handleWheel = (event) => {
  e.preventDefault();
  cardsRef.current.scrollLeft += event.deltaY;
}
useEffect(()=>{
  cardsRef.current.addEventListener('wheel',handleWheel)
},[])

  return (
    <div className='title-cards'> 
      <h2>Popular on Netflix</h2>
      <div className="card-data">
        <div className="card-list" ref={cardsRef}>
          {cards_data.map((card,index) =>{
            return <div className="card"  key={index} >
              <img src={card.image} alt="" />
              <p>{card.name}</p>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default TitleCards
