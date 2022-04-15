import React from 'react';
import { FiX } from 'react-icons/fi';
import { FiChevronDown } from 'react-icons/fi';

// styles
import './Faq.scss';

export default function Faq({ handleToggle, isActive }) {
  return (
    <div className='faq-container'>
      <div className={isActive ? 'faq' : 'faq active'}>
        <h3 className='faq-title'>Basic Lock</h3>

        <p className='faq-text'>
          The hesitating or Freezing of the Arms to the beats of the music,
          where created By <b>Don Campbell</b> in the Late 1960s, early 1970s as he
          paused or froze while trying to do a popular social dance called the
          “funky chicken” between doing this and various other social dances and
                  stunts.The pauses became known as locks or locking up. <br/><br/>
                  Later in the
          development Leo” Flukey Luke Williamson”introduced a unique Lock by
          placing the outer ridge of both of his hands on his waist and locking
          his elbows forward this became known as the “ Leo Lock”
        </p>

        <button className='faq-toggle' onClick={handleToggle}>
          {isActive ? (
            <FiChevronDown className='icon' />
          ) : (
            <FiX className='icon' />
          )}
        </button>
      </div>
    </div>
  );
}
