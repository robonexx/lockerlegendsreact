import React from 'react'
import { pioneers } from '../../content/pioneers';

// styles 
import './Sidebar.scss'

export default function Sidebar() {
  return (
      <>
      <nav id="navbar">
        <ul>
          {pioneers.map(({ id, name, href, cName }) => (
            <li key={id}><a href={href} className={cName}><b>{name}</b></a></li>
          ))}
        </ul>
          </nav>
      </>
    
  )
}


/* 
          <nav id="navbar">
        <header id="header">Menu</header>
        <ul>
          <li><a className="nav-link" href="#Introduction"><b>Introduction</b></a></li>
          <li>
            <a className="nav-link" href="#The_term_OG"
              ><b>The term OG</b></a
            >
          </li>
          <li>
            <a className="nav-link" href="#Don_Campbell"><b>Don Campbell</b></a>
          </li>
          <li><a className="nav-link" href="#Damita_Jo_Freeman"><b>Damita Jo Freeman</b></a></li>
          <li><a className="nav-link" href="#Greg_Pope"><b>Greg Pope</b></a></li>
          <li><a className="nav-link" href="#Fred_Berry"><b>Fred Berry</b></a></li>
          <li>
            <a className="nav-link" href="#Leo_Williams"><b>Leo Williams</b></a>
          </li>
          <li><a className="nav-link" href="#Jimmy_Foster"><b>Jimmy Foster</b></a></li>
          <li><a className="nav-link" href="#James_Higgins"><b>James Higgins</b></a></li>
          <li><a className="nav-link" href="#Arnetta_Johnson"><b>Arnetta Johnson</b></a></li>
          <li><a className="nav-link" href="#Anthony_Lewis"><b>Anthony Lewis</b></a></li>
          <li><a className="nav-link" href="#Others"><b>Others</b></a></li>
          </ul>
      </nav>
*/