import React, { useState } from 'react';
import Faq from '../../components/faqbox/Faq';
// styles
import './StepsAndMoves.scss';

export default function StepsAndMoves() {
  const [isActive, setActive] = useState('false');
  

  const handleToggle = () => {
    setActive(!isActive);
    
  };

  return (
    <div className='steps-wrapper'>
      <div className='container-top'>
        <h1>THE STEPS & MOVES OF LOCKING</h1>
        <h4>
          Lockerlegends has often been told that moves created by pioneers other
          than Don Campbell should not be associated with Locking, We find that
          amazing, as all over the world people are teaching and doing the basic
          moves that they have seen the Pioneers do for decades.
        </h4>
      </div>
      <div className='faq-section'>
        <Faq handleToggle={handleToggle} isActive={isActive} />
      </div>
    </div>
  );
}

/* const toggles = document.querySelectorAll('.faq-toggle');

    toggles.forEach((toggle) => {
      toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active');
      });
    }); */
