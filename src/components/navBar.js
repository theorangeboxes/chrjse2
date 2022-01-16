import React, { Component } from "react";
const style = {
  paddingLeft: "15px",
};

const NavBar = () => {
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <a className='navbar-brand btn' href='#' style={style}>
          <i className='bi bi-apple'></i>
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarText'
          aria-controls='navbarText'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarText'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item active'>
              <a className='nav-link' href='#'>
                Macbook
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Ipad
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                AppleWatch
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
