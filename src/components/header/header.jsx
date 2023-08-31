import React from 'react'
import styles from './header.module.css';
import {NavLink } from 'react-router-dom';
import './navlink.css';


const Header = () => {
  return (
    <header>
        <nav>
          <NavLink exact="true" to="/" activeclassname="active">Home</NavLink>
          <NavLink to="/shopping" exact="true" activeclassname="active">Shopping</NavLink>
      </nav>
    </header>
  )
} 

export default Header