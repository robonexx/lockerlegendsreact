import React from 'react';
import { pioneers } from '../../content/pioneers';

// styles
import './Hof.scss'

export default function Hof() {
  return (
    <div className='hof-wrapper'>
      {pioneers.map(({ name, desc, aka, id, img }) => (
        <div className='main-section' id={id}>
          <div className='left-side'>
            {name}
            <img src={img} className='image' alt='' />
          </div>

          <div className='content'>
            <header>
              <b className='og-era'>{aka}</b>
            </header>

            <div className='text'>{desc}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
