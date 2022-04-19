import React from 'react';
import { steps } from '../../content/steps';
import FaqItem from './FaqItem';

//styles
import './Faq.scss';

export default function FaqList() {
  return (
    <ul className='faq-container'>
      {steps.map(({ name, desc, id }) => {
        return <FaqItem name={name} desc={desc} key={id} />;
      })}
    </ul>
  );
}
