import React from 'react';
import logo from '../../assets/images/logo.svg';
import reactLogo from '../../assets/images/react.svg';
import classes from './Header.module.css';


function Header() {
  return (
    <header className="header">
    <div className="container flex">
      <div className={classes.brandLogo}>
        <img src={logo} alt="logo"/>
      </div>
      <div className={classes.reactLogo}>
        <img src={reactLogo} alt="React"/>
        <strong>React</strong>
      </div>
    </div>
  </header>
  )
}

export default Header