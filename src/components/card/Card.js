import React from 'react';
import IconDice from '../../assets/svg icons/IconDice';
import PatternDividerMobile from '../../assets/svg icons/PatternDividerMobile';
import './Card.css';

function Card() {
  return (
    <div className='card-container'>
      <span>Advice #44</span>
      <p>If you are feeling down, try holding a pencil between your top lip and your nose for five minutes.</p>
      <PatternDividerMobile />
      <button className='next-button'>
        <IconDice />
      </button>
    </div>
  )
}

export default Card