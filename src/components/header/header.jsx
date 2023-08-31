import React from 'react'
import styles from './header.module.css';
import {NavLink } from 'react-router-dom';
import './navlink.css';
import { useSelector } from 'react-redux';


const Header = () => {
  const {cartlist}=useSelector(state=>state.cartlist);

  return (
    <header>
        <nav>
          <NavLink exact="true" to="/dashboard" activeclassname="active">Home</NavLink>
          <NavLink to="/shopping" exact="true" activeclassname="active">Shopping</NavLink>
          <NavLink to="/cart" exact="true" activeclassname="active">Cart<span className={styles.bold}>({cartlist.length})</span></NavLink>
      </nav>
    </header>
  )
} 

export default Header