import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';
import { FiChevronDown } from 'react-icons/fi';

// styles
import './Faq.scss';

export default function FaqItem({ name, desc, id }) {
  const [isActive, setActive] = useState(false);

  return (
    <li key={id} className={!isActive ? 'faq' : 'faq active'}>
      <button className='faq-toggle' onClick={() => setActive(!isActive)}>
        {!isActive ? (
          <FiChevronDown className='icon' />
        ) : (
          <FiX className='icon' />
        )}
      </button>
      <h3 className='faq-title'>{name}</h3>
      <p className='faq-text'>{desc}</p>
    </li>
  );
}
