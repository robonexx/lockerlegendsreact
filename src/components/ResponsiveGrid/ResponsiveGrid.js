import React from 'react';
import './ResponsiveGrid.scss';
import { items } from './../../content/items';

export default function ResponsiveGrid() {
  
  return (
    <div className='responsiveGrid'>
      {items.map(({ title, image }, i) => (
        <div key={i} className='itemData'>
          <div className='item'>
            <div className='title'>{title}</div>
            <div className='image'>
              <img src={image} alt="item images"/>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
